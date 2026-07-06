import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ImageWithFallback from "@/components/image-with-fallback" // Changed import

export default function ContentSection() {
  return (
    <section id="india" className="py-12 md:py-20 bg-primary-dark text-text-light border-b border-border-subtle">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-accent-cyan">
          Overview
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-center text-text-muted mb-10">
          Before diving deeper into features like the app, games, and login system, it’s important to understand why Ganga Club India has gained recognition. This platform blends localized features, secure technology, and a user first design that resonates strongly with Indian players.
        </p>

        <div className="relative w-[300px] h-[300px] mx-auto md:w-[500px] md:h-[500px] mb-12 rounded-lg overflow-hidden shadow-lg">
          <ImageWithFallback // Changed component
            src="/images/banner/Ganga-Club-Bonus-For-India.webp"
            alt="Ganga-Club-Bonus-For-India"
            fill
            sizes="(max-width: 768px) 300px, 500px"
            quality={85}
            fallbackQuery="Ganga-Club-Bonus-For-India" // Added fallback query
            className="object-cover object-center"
          />
        </div>

        <Tabs defaultValue="what" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-secondary-dark rounded-md p-1">
            <TabsTrigger value="what" className="data-[state=active]:bg-primary-dark data-[state=active]:text-accent-cyan data-[state=active]:shadow-sm text-text-light hover:text-accent-cyan">What is it?</TabsTrigger>
            <TabsTrigger value="choose" className="data-[state=active]:bg-primary-dark data-[state=active]:text-accent-cyan data-[state=active]:shadow-sm text-text-light hover:text-accent-cyan">Why Choose Us?</TabsTrigger>
            <TabsTrigger value="community" className="data-[state=active]:bg-primary-dark data-[state=active]:text-accent-cyan data-[state=active]:shadow-sm text-text-light hover:text-accent-cyan">Community</TabsTrigger>
          </TabsList>
          <TabsContent value="what" className="mt-4">
            <div className="grid gap-6 md:grid-cols-1">
              <Card className="col-span-full bg-secondary-dark text-text-light border border-border-subtle shadow-lg">
                <CardHeader>
                  <CardTitle className="text-accent-cyan">
                    <h3 className="text-lg font-semibold mb-2 text-accent-cyan">What is it?</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-text-light">
                    At its core, Ganga Club India is an entertainment platform built for digital interaction. It provides seamless access across devices, allowing players in India to enjoy engaging activities anytime, anywhere. The system is mobile friendly, lightweight, and intuitive, making it suitable for beginners and experienced users alike.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="choose" className="mt-4">
            <div className="grid gap-6 md:grid-cols-1">
              <Card className="col-span-full bg-secondary-dark text-text-light border border-border-subtle shadow-lg">
                <CardHeader>
                  <CardTitle className="text-accent-cyan">
                    <h3 className="text-lg font-semibold mb-2 text-accent-cyan">Why Choose Us?</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-text-light">
                    For Indian users, choosing the right platform is often about trust, simplicity, and reliability. Ganga Club India ticks all these boxes by offering a localized interface, secure login systems, and consistent performance that matches modern expectations.
                  </p>

                  <h4 className="text-xl font-semibold text-accent-cyan">
                    Localized Features
                  </h4>
                  <p className="mb-4 text-text-light">
                    One of the main strengths is its adaptability. Menus, guides, and features are designed with Indian users in mind, ensuring cultural relevance and practical use.
                  </p>

                  <h4 className="text-xl font-semibold text-accent-cyan">
                    Trusted Experience
                  </h4>
                  <p className="mb-4 text-text-light">
                    Safety is a top priority. Employs encrypted access, verified systems, and continuous updates to deliver a trusted environment where players can focus on their digital journey without worries.
                  </p>


                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="community" className="mt-4">
            <div className="grid gap-6 md:grid-cols-1">
              <Card className="col-span-full bg-secondary-dark text-text-light border border-border-subtle shadow-lg">
                <CardHeader>
                  <CardTitle className="text-accent-cyan">
                    <h3 className="text-lg font-semibold mb-2 text-accent-cyan">Community Engagement in India</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-text-light">
                    We also thrives on community interaction. It encourages player to participate, share experiences, and explore features together, building a sense of belonging.
                  </p>

                  <h4 className="text-xl font-semibold text-accent-cyan">
                    Cultural Relevance
                  </h4>
                  <p className="mb-4 text-text-light">
                    The platform integrates elements that reflect Indian lifestyles, festivals, and preferences, making the experience more personal.
                  </p>

                  <h4 className="text-xl font-semibold text-accent-cyan">
                    User Support for Indian Players
                  </h4>
                  <p className="mb-4 text-text-light">
                    A responsive support system ensures that any technical or account related issue is resolved quickly, keeping the community confident and connected.
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
