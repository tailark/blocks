import { NextResponse } from "next/server"
import { registry } from "@/registry/registry"
import {
    getRegistryItem,
    isRegistryIndexRequest,
    normalizeRegistryItemName,
} from "@/lib/registry-item"

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ name: string }> }
) {
    const { name: rawName } = await params

    if (isRegistryIndexRequest(rawName)) {
        return NextResponse.json(registry)
    }

    const name = normalizeRegistryItemName(rawName)
    const item = await getRegistryItem(name)

    if (!item) {
        return NextResponse.json({ error: "Registry item not found" }, { status: 404 })
    }

    return NextResponse.json(item)
}
