import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ImageWithFallback from "@/components/image-with-fallback" // Changed import

export default function ContentSection() {
  return (
    <section id="casino" className="py-12 md:py-20 bg-primary-dark text-text-light border-b border-border-subtle">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-accent-cyan">
          Ganga Club Game - Fairplay Gameplay
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-center text-text-muted mb-10">
          The Ganga Club Game collection offers a wide range of exciting titles tailored for different types of players in India. From classic casino favorites to modern slot machines, the platform ensures there’s something enjoyable for every preference. With a seamless interface and fair play technology, creates an environment where entertainment and trust go hand in hand.
        </p>

        <div className="relative w-[300px] h-[300px] mx-auto md:w-[500px] md:h-[500px] mb-12 rounded-lg overflow-hidden shadow-lg">
          <ImageWithFallback // Changed component
            src="/images/banner/Ganga-Club-Big-Jackpot-Prizes.webp"
            alt="Ganga-Club-Big-Jackpot-Prizes"
            fill
            sizes="(max-width: 768px) 300px, 500px"
            quality={85}
            fallbackQuery="Ganga-Club-Big-Jackpot-Prizes" // Added fallback query
            className="object-cover object-center"
          />
        </div>

        <Tabs defaultValue="casino" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-secondary-dark rounded-md p-1">
            <TabsTrigger value="casino" className="data-[state=active]:bg-primary-dark data-[state=active]:text-accent-cyan data-[state=active]:shadow-sm text-text-light hover:text-accent-cyan">Casino Games</TabsTrigger>
            <TabsTrigger value="slot" className="data-[state=active]:bg-primary-dark data-[state=active]:text-accent-cyan data-[state=active]:shadow-sm text-text-light hover:text-accent-cyan">Slot Games</TabsTrigger>
            <TabsTrigger value="live" className="data-[state=active]:bg-primary-dark data-[state=active]:text-accent-cyan data-[state=active]:shadow-sm text-text-light hover:text-accent-cyan">Live</TabsTrigger>
          </TabsList>
          <TabsContent value="casino" className="mt-4">
            <div className="grid gap-6 md:grid-cols-1">
              <Card className="col-span-full bg-secondary-dark text-text-light border border-border-subtle shadow-lg">
                <CardHeader>
                  <CardTitle className="text-accent-cyan">
                    <h3 className="text-lg font-semibold mb-2 text-accent-cyan">Popular Casino Games</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-text-light">
                    The platform features well known casino classics that have been enjoyed for decades. These games combine traditional rules with a modern digital experience, providing familiarity and excitement in equal measure.
                  </p>

                  <ul className="list-disc list-inside mb-4 space-y-1 text-text-light">
                    <li>Roulette: Spin the wheel and test your strategy on one of the most iconic games.</li>
                    <li>Blackjack: Beat the dealer with skillful card play and quick decisions.</li>
                    <li>Poker Variants: Engage in Texas Hold’em or Omaha, where strategy meets psychology.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="slot" className="mt-4">
            <div className="grid gap-6 md:grid-cols-1">
              <Card className="col-span-full bg-secondary-dark text-text-light border border-border-subtle shadow-lg">
                <CardHeader>
                  <CardTitle className="text-accent-cyan">
                    <h3 className="text-lg font-semibold mb-2 text-accent-cyan">Slot Games</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-text-light">
                    Slot games are among the most popular offerings on the platform. The variety of slot titles ensures that both new and experienced players have plenty of choices.
                  </p>

                  <h4 className="text-xl font-semibold text-accent-cyan">
                    Classic Slot Machines
                  </h4>
                  <p className="mb-4 text-text-light">
                    For those who enjoy the charm of old school gaming, classic slots with simple reels and symbols provide a nostalgic experience.
                  </p>

                  <h4 className="text-xl font-semibold text-accent-cyan">
                    Video Slots
                  </h4>
                  <p className="mb-4 text-text-light">
                    Modern video slots bring immersive graphics, sound effects, and storylines to the table. These games often include free spins, multipliers, and bonus rounds to keep the gameplay dynamic.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="live" className="mt-4">
            <div className="grid gap-6 md:grid-cols-1">
              <Card className="col-span-full bg-secondary-dark text-text-light border border-border-subtle shadow-lg">
                <CardHeader>
                  <CardTitle className="text-accent-cyan">
                    <h3 className="text-lg font-semibold mb-2 text-accent-cyan">Live Dealer Experience</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-text-light">
                    To recreate the atmosphere of a real casino, also offers live dealer games. Players interact with professional dealers in real time through HD streaming. This feature makes the Ganga Club Game library more engaging and authentic for Indian users seeking a genuine casino vibe.
                  </p>

                  <p className="mb-4 text-text-light">
                    Whether you prefer the simplicity of slots or the complexity of poker strategies, the Game section is designed to deliver endless fun while maintaining fairness and transparency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
