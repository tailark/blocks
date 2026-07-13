import { NextResponse } from "next/server"
import {
    getRegistryIndex,
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
        return NextResponse.json(getRegistryIndex("base"))
    }

    const name = normalizeRegistryItemName(rawName)
    const item = await getRegistryItem(name, "base")

    if (!item) {
        return NextResponse.json({ error: "Registry item not found" }, { status: 404 })
    }

    return NextResponse.json(item)
}
