import { NextResponse } from "next/server"
import { registry } from "@/registry/registry"

export async function GET() {
    return NextResponse.json(registry)
}
