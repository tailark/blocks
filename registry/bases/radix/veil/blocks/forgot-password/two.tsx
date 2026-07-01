import { Logo } from '@/registry/bases/radix/veil/ui/logo'
import { Button } from '@/registry/bases/radix/veil/ui/button'
import { Input } from '@/registry/bases/radix/veil/ui/input'
import { Label } from '@/registry/bases/radix/veil/ui/label'
import Link from 'next/link'

export default function ForgotPassword() {
    return (
        <section className="bg-background flex min-h-screen px-4 py-16 md:py-24">
            <div className="bg-muted m-auto w-full max-w-sm rounded-2xl border p-8">
                <div>
                    <Link
                        href="/"
                        aria-label="go home"
                    >
                        <Logo className="h-6 w-fit" />
                    </Link>
                    <h1 className="mt-6 font-serif text-2xl font-medium">Forgot password?</h1>
                    <p className="text-muted-foreground mt-1 text-sm">No worries, we'll send you reset instructions</p>
                </div>

                <form
                    action=""
                    className="mt-8 space-y-5"
                >
                    <div className="space-y-2">
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

                <p className="text-muted-foreground mt-8 text-center text-sm">
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
