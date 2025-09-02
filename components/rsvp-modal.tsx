"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createClient } from "@/lib/supabase/client"

interface RSVPData {
  name: string
  attending: string
  accommodation: string
}

export function RSVPModal() {
  const [formData, setFormData] = useState<RSVPData>({
    name: "",
    attending: "",
    accommodation: "",
  })
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const supabase = createClient()

      const { data, error } = await supabase.from("rsvps").insert([
        {
          name: formData.name,
          attending: formData.attending === "yes",
          accommodation: formData.attending === "yes" ? formData.accommodation || "none" : null,
        },
      ])

      if (error) {
        throw error
      }

      alert(`Thank you ${formData.name}! Your RSVP has been submitted. 🎉`)
      setIsOpen(false)
      setFormData({ name: "", attending: "", accommodation: "" })
    } catch (error) {
      console.error("Error submitting RSVP:", error)
      setError("Failed to submit RSVP. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-yellow-400 max-w-sm w-full"
        >
          🎂 Let me know you're coming! 🎂
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-primary">Join My Birthday Celebration!</DialogTitle>
          <DialogDescription className="text-center">
            I'd love to have you celebrate my 30th with me! Let me know if you can make it.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-3">
            <Label>Will you be attending? *</Label>
            <RadioGroup
              value={formData.attending}
              onValueChange={(value) => setFormData({ ...formData, attending: value })}
              required
              disabled={isSubmitting}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes, I'll be there! 🎉</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">Sorry, can't make it 😢</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.attending === "yes" && (
            <div className="space-y-2">
              <Label htmlFor="accommodation">Accommodation Preference</Label>
              <Select
                value={formData.accommodation}
                onValueChange={(value) => setFormData({ ...formData, accommodation: value })}
                disabled={isSubmitting}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Just for the party</SelectItem>
                  <SelectItem value="camping">Camping with tent 🏕️</SelectItem>
                  <SelectItem value="sleepover">Sleeping over indoors 🏠</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={!formData.name || !formData.attending || isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit RSVP"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
