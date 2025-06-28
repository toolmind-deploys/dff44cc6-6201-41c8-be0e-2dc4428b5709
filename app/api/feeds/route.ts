import { firestore } from "firebase-admin";
import { initFirebaseAdminSDK } from "@/config/firebase-admin-config";
import { NextRequest, NextResponse } from "next/server";

initFirebaseAdminSDK();
const fsdb = firestore();

export async function GET(req: NextRequest) {
    try {
        const snapshot = await fsdb.collection("feeds").get();
        const data = snapshot.docs.map((doc) => doc.data());
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
