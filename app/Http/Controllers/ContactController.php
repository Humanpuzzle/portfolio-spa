<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactMessageMail;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|min:2',
            'email' => 'required|email',
            'phone' => 'nullable|phone:HU',
            'message' => 'required|min:10',
        ], [
            'name.required' => 'A név megadása kötelező.',
            'email.required' => 'Az email megadása kötelező.',
            'message.required' => 'Az üzenet mező kötelező.',
        ]);

        // honeypot
        if ($request->company) {
            return response()->json(['message' => 'Spam detected'], 422);
        }

        if ($request->form_started_at) {
            $diff = now()->timestamp - (int)$request->form_started_at;

            if ($diff < 3) {
                return response()->json(['message' => 'Too fast'], 422);
            }
        }

        // TODO: mail / DB
        Mail::to('your-email@example.com')->send(new ContactMessageMail($validated));

        return response()->json([
            'message' => 'Üzenet sikeresen elküldve!',
        ]);
    }
}
