export default function LogoCloud() {
    return (
        <section>
            <div className="mx-auto max-w-5xl px-6 py-8">
                <div className="flex flex-wrap items-center gap-4">
                    <p className="text-muted-foreground text-center">Trusted by teams at :</p>
                    <div className="flex items-center justify-center gap-8">
                        <div className="flex">
                            <img
                                className="mx-auto h-4 w-fit"
                                src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                alt="Nvidia Logo"
                                height="20"
                                width="auto"
                            />
                        </div>

                        <div className="flex">
                            <img
                                className="mx-auto h-3 w-fit"
                                src="https://html.tailus.io/blocks/customers/column.svg"
                                alt="Column Logo"
                                height="16"
                                width="auto"
                            />
                        </div>
                        <div className="flex">
                            <img
                                className="mx-auto h-3 w-fit"
                                src="https://html.tailus.io/blocks/customers/github.svg"
                                alt="GitHub Logo"
                                height="16"
                                width="auto"
                            />
                        </div>
                        <div className="flex">
                            <img
                                className="mx-auto h-4 w-fit"
                                src="https://html.tailus.io/blocks/customers/nike.svg"
                                alt="Nike Logo"
                                height="20"
                                width="auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
