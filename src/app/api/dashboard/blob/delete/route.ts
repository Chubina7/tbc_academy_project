import { del } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const urlToDelete = searchParams.get('url') as string;

    try {
        await del(urlToDelete);

        return NextResponse.json({ message: "Deleted successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Can not delete blob" }, { status: 500 })
    }
}