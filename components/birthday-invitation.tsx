"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { RSVPModal } from "@/components/rsvp-modal"
import { MapPin, Calendar, Clock, Utensils, Wine, Tent, Mail } from "lucide-react"

export function BirthdayInvitation() {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/15 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 text-balance">
              30th Birthday
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
              You're Invited to Celebrate!
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Join me for an unforgettable outdoor celebration with great food, drinks, and friends. Camping welcome!
            </p>
          </div>

          <RSVPModal />
        </div>
      </div>

      {/* Event Details */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Date & Time */}
            <Card className="border-2 border-primary/30 hover:border-primary/60 transition-colors hover:shadow-lg hover:shadow-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Calendar className="h-6 w-6" />
                  Date & Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Saturday, September 27th, 2025</p>
                <p className="text-muted-foreground flex items-center gap-2 mt-2">
                  <Clock className="h-4 w-4" />
                  12:15 PM - Late
                </p>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="border-2 border-secondary/30 hover:border-secondary/60 transition-colors hover:shadow-lg hover:shadow-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <MapPin className="h-6 w-6" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Country house Martinova Klet</p>
                <p className="text-muted-foreground">Prosenjakovci 1a</p>
                <p className="text-muted-foreground">9207 Prosenjakovci</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-3 border-secondary/50 text-secondary hover:bg-secondary/10 bg-transparent"
                  asChild
                >
                  <a
                    href="https://www.google.com/maps/search/Prosenjakovci+1a,+9207+Prosenjakovci"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Camping Info */}
            <Card className="border-2 border-accent/30 hover:border-accent/60 transition-colors hover:shadow-lg hover:shadow-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent">
                  <Tent className="h-6 w-6" />
                  Camping & Sleep Over
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bring your tent or sleeping bag! We have space for camping and indoor sleeping arrangements.
                </p>
                <p className="text-sm text-accent font-medium mt-2">Let us know in your RSVP!</p>
              </CardContent>
            </Card>
          </div>

          {/* Food & Drinks */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Food Menu */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Utensils className="h-6 w-6" />
                  Food Menu
                </CardTitle>
                <CardDescription>Delicious eats for everyone!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-secondary">BBQ & Grilled</h4>
                    <ul className="text-muted-foreground text-sm mt-1 space-y-1">
                      <li>• Grilled burgers & veggie patties</li>
                      <li>• BBQ chicken & ribs</li>
                      <li>• Grilled corn on the cob</li>
                      <li>• Sausages & hot dogs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Sides & Salads</h4>
                    <ul className="text-muted-foreground text-sm mt-1 space-y-1">
                      <li>• Potato salad</li>
                      <li>• Coleslaw</li>
                      <li>• Fresh fruit platter</li>
                      <li>• Chips & dips</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Desserts</h4>
                    <ul className="text-muted-foreground text-sm mt-1 space-y-1">
                      <li>• Birthday cake (of course!)</li>
                      <li>• S'mores around the campfire</li>
                      <li>• Ice cream</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Drinks Menu */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Wine className="h-6 w-6" />
                  Drinks Menu
                </CardTitle>
                <CardDescription>Cheers to 30 years!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-secondary">Alcoholic</h4>
                    <ul className="text-muted-foreground text-sm mt-1 space-y-1">
                      <li>• Craft beer selection</li>
                      <li>• Wine (red & white)</li>
                      <li>• Signature birthday cocktails</li>
                      <li>• Whiskey & spirits</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Non-Alcoholic</h4>
                    <ul className="text-muted-foreground text-sm mt-1 space-y-1">
                      <li>• Fresh lemonade</li>
                      <li>• Iced tea</li>
                      <li>• Sodas & sparkling water</li>
                      <li>• Coffee & hot chocolate</li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg mt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Please drink responsibly!</strong> We'll have designated drivers and ride-share info
                      available.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <Card className="mt-8 border-2 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-primary">
                <Mail className="h-6 w-6" />
                Questions or Suggestions?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Have any questions about the party or suggestions for activities?
              </p>
              <div className="flex justify-center">
                <Button variant="outline" asChild>
                  <a href="mailto:nmatja@proton.me" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 mr-2" />
                    nmatja@proton.me
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted py-8 px-4 text-center">
        <p className="text-muted-foreground">Can't wait to celebrate with you! 🎉</p>
        <p className="text-sm text-muted-foreground mt-2">This party is going to be legendary!</p>
      </footer>
    </div>
  )
}
