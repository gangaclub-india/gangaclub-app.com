import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ImageWithFallback from "@/components/image-with-fallback" // Changed import

export default function ContentSection() {
  return (
    <section id="login" className="py-12 md:py-20 bg-primary-dark text-text-light border-b border-border-subtle">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-accent-cyan">
        Ganga Club Login - Secure Access and Fast Load
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-center text-text-muted mb-10">
        Accessing your account through Ganga Club Login is designed to be quick, secure, and simple for Indian users. The login system combines modern encryption with intuitive design, ensuring you can get started without unnecessary delays. Whether through the website or the App, the process is built for convenience and peace of mind.
        </p>
        <div className="relative w-[300px] h-[300px] mx-auto md:w-[500px] md:h-[500px] mb-12 rounded-lg overflow-hidden shadow-lg">
          <ImageWithFallback // Changed component
            src="/images/banner/Ganga-Club-Daily-Bonus.webp"
            alt="Ganga-Club-Daily-Bonus"
            fill
            sizes="(max-width: 768px) 300px, 500px"
            quality={85}
            fallbackQuery="Ganga-Club-Daily-Bonus" // Added fallback query
            className="object-cover object-center"
          />
        </div>

        <Tabs defaultValue="how" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-secondary-dark rounded-md p-1">
            <TabsTrigger value="how" className="data-[state=active]:bg-primary-dark data-[state=active]:text-accent-cyan data-[state=active]:shadow-sm text-text-light hover:text-accent-cyan"> How to Login?</TabsTrigger>
            <TabsTrigger value="issues" className="data-[state=active]:bg-primary-dark data-[state=active]:text-accent-cyan data-[state=active]:shadow-sm text-text-light hover:text-accent-cyan">Common Issues</TabsTrigger>
          </TabsList>
          <TabsContent value="how" className="mt-4">
            <div className="grid gap-6 md:grid-cols-1">
              <Card className="col-span-full bg-secondary-dark text-text-light border border-border-subtle shadow-lg">
                <CardHeader>
                  <CardTitle className="text-accent-cyan">
                    <h3 className="text-lg font-semibold mb-2 text-accent-cyan">How to Login?</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-text-light">
                  To sign in, users only need their registered details. The system has been designed to handle thousands of active users simultaneously without slowing down, making the login process reliable across devices. Once inside, you can explore the Game, adjust your profile, and enjoy smooth account management.
                  </p>
                  
                  <p className="mb-4 text-text-light">
                  Steps for logging in :
                  </p>

                  <ol className="list-decimal list-inside mb-4 space-y-1 text-text-light">
                    <li>Open the official platform or the App.</li>
                    <li>Enter your registered details accurately.</li>
                    <li>Confirm access and begin your digital experience instantly.</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="issues" className="mt-4">
            <div className="grid gap-6 md:grid-cols-1">
              <Card className="col-span-full bg-secondary-dark text-text-light border border-border-subtle shadow-lg">
                <CardHeader>
                  <CardTitle className="text-accent-cyan">
                    <h3 className="text-lg font-semibold mb-2 text-accent-cyan">Common Login Issues and Fixes</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-text-light">
                  While the login process is straightforward, occasional issues can occur. We ensures solutions are simple and accessible.
                  </p>

                  <h4 className="text-xl font-semibold text-accent-cyan">
                    Forgotten Password
                  </h4>
                  <p className="mb-4 text-text-light">
                    If you forget your password, the reset option allows you to recover access quickly. A secure link is sent to your email or phone number, helping you regain entry without hassle.
                  </p>

                  <h4 className="text-xl font-semibold text-accent-cyan">
                    Account Lock Solutions
                  </h4>
                  <p className="mb-4 text-text-light">
                    Multiple failed login attempts may temporarily lock your account for safety reasons. Users can wait a short time before retrying or contact support for quicker recovery. This approach ensures both user protection and smooth access.
                  </p>
                  <p className="mb-4 text-text-light">
                    By focusing on simplicity and reliability, Ganga Club Login maintains trust among its players in India. It provides a balance between security protocols and a frictionless experience, making sure you can access your account anytime you need.
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
