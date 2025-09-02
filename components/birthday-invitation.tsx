"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { RSVPModal } from "@/components/rsvp-modal"
import { MapPin, Calendar, Clock, Utensils, Wine, Tent, Mail, Heart } from "lucide-react"

export function BirthdayInvitation() {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/15 py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 md:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 text-balance">
              30th Birthday
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 md:mb-6 text-balance text-center">
              You're invited to celebrate!
            </h2>
            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto text-pretty">
              Join me for an unforgettable outdoor celebration with great food, drinks, and friends. Camping welcome!
            </p>
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-3 md:p-4 mb-6 md:mb-8 max-w-lg mx-auto">
              <p className="text-sm md:text-base text-foreground flex items-center justify-center gap-2">
                <Heart className="h-4 w-4 text-accent" />
                Partners & plus-ones are welcome!
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <RSVPModal />
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
            {/* Date & Time */}
            <Card className="border-2 border-primary/30 hover:border-primary/60 transition-colors hover:shadow-lg hover:shadow-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-yellow-500 text-lg">
                  <Calendar className="h-5 w-5" />
                  Date & Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg font-semibold">Saturday, September 27th, 2025</p>
                <p className="text-muted-foreground flex items-center gap-2 mt-2 text-sm md:text-base">
                  <Clock className="h-4 w-4" />
                  12:15 PM - Late
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/30 hover:border-secondary/60 transition-colors hover:shadow-lg hover:shadow-secondary/20 bg-secondary/5">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-yellow-500 text-lg">
                  <MapPin className="h-5 w-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-bold text-base md:text-lg text-foreground">Country house Martinova Klet</p>
                  <p className="font-medium text-foreground">Prosenjakovci 1a</p>
                  <p className="font-medium text-foreground">9207 Prosenjakovci</p>
                </div>
                <Button
                  variant="default"
                  size="sm"
                  className="mt-4 w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium"
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
            <Card className="border-2 border-accent/30 hover:border-accent/60 transition-colors hover:shadow-lg hover:shadow-accent/20 md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-yellow-500 text-lg">
                  <Tent className="h-5 w-5" />
                  Camping & Sleep Over
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm md:text-base">
                  Bring your tent or sleeping bag! We have space for camping and indoor sleeping arrangements.
                </p>
                <p className="text-sm text-accent font-medium mt-2">Let us know in your RSVP!</p>
              </CardContent>
            </Card>
          </div>

          {/* Food & Drinks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-500 text-lg">
                  <Utensils className="h-5 w-5" />
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
                      <li>• Secret guest on the menu 😉</li>
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-500 text-lg">
                  <Wine className="h-5 w-5" />
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
                      <li>• Whiskey & spirits</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Non-Alcoholic</h4>
                    <ul className="text-muted-foreground text-sm mt-1 space-y-1">
                      <li>• Iced tea</li>
                      <li>• Sodas & sparkling water</li>
                      <li>• Coffee</li>
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
          <Card className="mt-4 md:mt-8 border-2 border-primary/20">
            <CardHeader className="text-center pb-3">
              <CardTitle className="flex items-center justify-center gap-2 text-yellow-500 text-lg">
                <Mail className="h-5 w-5" />
                Questions or Suggestions?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                Have any questions about the party or suggestions for activities?
              </p>
              <div className="flex justify-center">
                <Button variant="outline" asChild className="w-full sm:w-auto bg-transparent">
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
      <footer className="bg-muted py-6 md:py-8 px-4 text-center">
        <p className="text-muted-foreground text-sm md:text-base">Can't wait to celebrate with you! 🎉</p>
        <p className="text-xs md:text-sm text-muted-foreground mt-2">This party is going to be legendary!</p>
      </footer>
    </div>
  )
}
