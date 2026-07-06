import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ImageWithFallback from "@/components/image-with-fallback" // Changed import

export default function ContentSection() {
  return (
    <section id="app" className="py-12 md:py-20 bg-primary-dark text-text-light border-b border-border-subtle">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-accent-cyan">
          Ganga Club App - Seamless Mobile in Your Hand
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-center text-text-muted mb-10">
          The Ganga Club App is one of the main reasons behind the platform’s growing popularity in India. It offers a seamless and mobile friendly way to stay connected with all the features, ensuring users enjoy smooth navigation and reliable performance at their fingertips.
        </p>

        <div className="relative w-[300px] h-[300px] mx-auto md:w-[500px] md:h-[500px] mb-12 rounded-lg overflow-hidden shadow-lg">
          <ImageWithFallback // Changed component
            src="/images/banner/Ganga-Club-Download-App.webp"
            alt="Ganga-Club-Download-App"
            fill
            sizes="(max-width: 768px) 300px, 500px"
            quality={85}
            fallbackQuery="Ganga-Club-Download-App"
            className="object-cover object-center"
          />
        </div>

        <Tabs defaultValue="download" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-secondary-dark rounded-md p-1">
            <TabsTrigger value="download" className="data-[state=active]:bg-primary-dark data-[state=active]:text-accent-cyan data-[state=active]:shadow-sm text-text-light hover:text-accent-cyan">Download</TabsTrigger>
            <TabsTrigger value="features" className="data-[state=active]:bg-primary-dark data-[state=active]:text-accent-cyan data-[state=active]:shadow-sm text-text-light hover:text-accent-cyan">Key Features</TabsTrigger>
          </TabsList>
          <TabsContent value="download" className="mt-4">
            <div className="grid gap-6 md:grid-cols-1">
              <Card className="col-span-full bg-secondary-dark text-text-light border border-border-subtle shadow-lg">
                <CardHeader>
                  <CardTitle className="text-accent-cyan">
                    <h3 className="text-lg font-semibold mb-2 text-accent-cyan">Downloading the App</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-text-light">
                    Designed for both Android and iOS, the app provides consistent access whether you are at home or on the move. Its lightweight installation makes it convenient even for player with limited storage, while regular updates keep the experience fresh and secure.
                  </p>

                  <p className="mb-4 text-text-light">
                    Getting started with the app is simple. Users can easily access the download links from the official website or trusted sources, ensuring a safe installation process.
                  </p>

                  <h4 className="text-xl font-semibold text-accent-cyan">
                    For Android Users
                  </h4>
                  <p className="mb-4 text-text-light">
                    The App is optimized for Android devices, allowing fast setup with minimal steps. Once installed, it delivers smooth interaction, quick load times, and stable functionality.
                  </p>

                  <h4 className="text-xl font-semibold text-accent-cyan">
                    For iOS Users
                  </h4>
                  <p className="mb-4 text-text-light">
                    iOS users can also enjoy the same experience by downloading the app directly through secure channels. The system has been tailored for Apple devices, ensuring high compatibility and intuitive navigation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="features" className="mt-4">
            <div className="grid gap-6 md:grid-cols-1">
              <Card className="col-span-full bg-secondary-dark text-text-light border border-border-subtle shadow-lg">
                <CardHeader>
                  <CardTitle className="text-accent-cyan">
                    <h3 className="text-lg font-semibold mb-2 text-accent-cyan">Key Features of the App</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-text-light">
                    The Ganga Club App is packed with features that make it user friendly and reliable. It’s not just about logging in or browsing the app offers an all in one solution for Indian players.
                  </p>

                  <ul className="list-disc list-inside mb-4 space-y-1 text-text-light">
                    <li>Smooth and responsive navigation</li>
                    <li>Encrypted and secure login access</li>
                    <li>Regular updates for performance and safety</li>
                    <li>Compatible with multiple devices</li>
                    <li>Lightweight design with minimal storage requirement</li>
                    <li>Notifications for updates and new features</li>
                  </ul>

                  <p className="mb-4 text-text-light">
                    These elements combine to create a flexible app experience, ensuring that both casual and regular users in India can rely for their daily entertainment needs.
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
