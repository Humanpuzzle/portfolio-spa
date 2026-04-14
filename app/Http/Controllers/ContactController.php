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
            'name.min' => 'A név legalább 2 karakter legyen.',

            'email.required' => 'Az email megadása kötelező.',
            'email.email' => 'Érvényes email címet adj meg.',

            'message.required' => 'Az üzenet mező kötelező.',
            'message.min' => 'Az üzenet legalább 10 karakter legyen.',

            'phone.phone' => 'Érvényes magyar telefonszámot adj meg.',
        ]);

        // honeypot
        if ($request->company) {
            return response()->json([
                'message' => 'Spam detected'
            ], 422);
        }

        // speed check
        if ($request->form_started_at) {
            $diff = now()->getTimestampMs() - (int)$request->form_started_at;

            if ($diff < 3000) {
                return response()->json([
                    'message' => 'Too fast'
                ], 422);
            }
        }

        Mail::to('your-email@example.com')
            ->send(new ContactMessageMail($validated));

        return response()->json([
            'message' => 'Üzenet sikeresen elküldve!',
        ]);
    }
}
