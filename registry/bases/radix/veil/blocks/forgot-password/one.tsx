import { Logo } from '@/registry/bases/radix/veil/ui/logo'
import { Button } from '@/registry/bases/radix/veil/ui/button'
import { Card } from '@/registry/bases/radix/veil/ui/card'
import { Input } from '@/registry/bases/radix/veil/ui/input'
import { Label } from '@/registry/bases/radix/veil/ui/label'
import Link from 'next/link'

export default function ForgotPassword() {
    return (
        <section className="bg-background grid min-h-screen grid-rows-[auto_1fr] px-4">
            <div className="mx-auto w-full max-w-7xl border-b py-3">
                <Link
                    href="/"
                    aria-label="go home"
                    className="inline-block border-t-2 border-transparent py-3"
                >
                    <Logo className="w-fit" />
                </Link>
            </div>

            <div className="m-auto w-full max-w-sm">
                <div className="text-center">
                    <h1 className="font-serif text-4xl font-medium">Forgot password?</h1>
                    <p className="text-muted-foreground mt-2 text-sm">Enter your email and we'll send you a reset link</p>
                </div>
                <Card
                    variant="outline"
                    className="mt-6 p-8"
                >
                    <form
                        action=""
                        className="space-y-5"
                    >
                        <div className="space-y-3">
                            <Label
                                htmlFor="email"
                                className="text-sm"
                            >
                                Email
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <Button className="w-full">Send Reset Link</Button>
                    </form>
                </Card>

                <p className="text-muted-foreground mt-6 text-center text-sm">
                    Remember your password?{' '}
                    <Link
                        href="#"
                        className="text-primary font-medium hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </section>
    )
}
