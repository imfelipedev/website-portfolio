import email from "@/models/email";
import { NextResponse } from "next/server";

export async function POST(request) {
    function validMessage(object) {
        let newObject = {};
        const nameRegex = /^[a-zA-Z]+$/;
        if (object.name && nameRegex.test(object.name)) {
            newObject.name = object.name;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (object.email && emailRegex.test(object.email)) {
            newObject.email = object.email;
        }

        const messageRegex = /\S+/;
        if (object.message && messageRegex.test(object.message)) {
            newObject.message = object.message;
        }

        if (!newObject.name || !newObject.email || !newObject.message) {
            throw new Error();
        }
        return newObject;
    }

    try {
        const insecureInputValues = await request.json();
        const object = validMessage(insecureInputValues);
        const text = `Nome: ${object.name}\nEmail: ${object.email}\nMessagem: ${object.message}`;
        await email.send(text);
    } catch (error) {
        return NextResponse.json(error, {
            status: error.statusCode,
        });
    }

    return NextResponse.json(
        {
            success: true,
        },
        {
            status: 200,
        }
    );
}
