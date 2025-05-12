import { LogoIcon } from '@tailark/core/components/logo'
import { Button } from '@mist/components/ui/button'
import { Input } from '@tailark/core/ui/input'
import { Label } from '@tailark/core/ui/label'
import Link from 'next/link'

export default function LoginPage() {
    return (
        <section className="bg-linear-to-b from-muted to-background flex min-h-screen px-4 py-16 md:py-32">
            <form
                action=""
                className="max-w-92 m-auto h-fit w-full">
                <div className="p-6">
                    <div>
                        <Link
                            href="/mist"
                            aria-label="go home">
                            <LogoIcon />
                        </Link>
                        <h1 className="mt-6 text-balance text-xl font-semibold">Forgot Your Password?</h1>
                        <p className="text-muted-foreground mt-1 text-sm">Enter your email to receive a reset link</p>
                    </div>

                    <div className="mt-6 space-y-6">
                        <div className="space-y-2">
                            <Label
                                htmlFor="email"
                                className="block text-sm">
                                Email
                            </Label>
                            <Input
                                type="email"
                                required
                                name="email"
                                id="email"
                                placeholder="Your email"
                                className="ring-foreground/15 border-transparent ring-1"
                            />
                        </div>

                        <Button
                            className="w-full"
                            size="default">
                            Send Reset Link
                        </Button>
                    </div>
                </div>
                <div className="px-6">
                    <p className="text-muted-foreground text-sm">
                        You remember your password ?
                        <Button
                            asChild
                            variant="link"
                            className="px-2">
                            <Link href="#">Sign In</Link>
                        </Button>
                    </p>
                </div>
            </form>
        </section>
    )
}
