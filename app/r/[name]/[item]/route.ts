import { NextResponse } from "next/server"
import {
    getRegistryIndex,
    getRegistryItem,
    isRegistryBase,
    isRegistryIndexRequest,
    normalizeRegistryItemName,
} from "@/lib/registry-item"

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ name: string; item: string }> }
) {
    const { name: base, item: rawName } = await params

    if (!isRegistryBase(base)) {
        return NextResponse.json({ error: "Registry base not found" }, { status: 404 })
    }

    if (isRegistryIndexRequest(rawName)) {
        return NextResponse.json(getRegistryIndex(base))
    }

    const name = normalizeRegistryItemName(rawName)
    const item = await getRegistryItem(name, base)

    if (!item) {
        return NextResponse.json({ error: "Registry item not found" }, { status: 404 })
    }

    return NextResponse.json(item)
}
