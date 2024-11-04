<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'email' => 'required|email|unique:users,email',
            'password' => [
                'required',
                Password::min(8)
            ],
            'posisi' => 'required|string',
            'name' => 'required|string',
            'noktp' => 'nullable|string',
            'tempattanggallahir' => 'nullable|string',
            'jeniskelamin' => 'nullable|string',
            'agama' => 'nullable|string',
            'goldarah' => 'nullable|string',
            'status' => 'nullable|string',
            'alamatktp' => 'nullable|string',
            'alamattinggal' => 'nullable|string',
            'notelp' => 'nullable|string',
            'huborangterdekat' => 'nullable|string',
            'skill' => 'nullable|string',
            'bersediaditempatkan' => 'nullable|string',
            'penghasilandiharap' => 'nullable|string',
            'pendidikanterakhir' => 'nullable|string',
            'riwayatpelatihan' => 'nullable|string',
            'riwayatpekerjaan' => 'nullable|string',
        ];
    }
    
}
