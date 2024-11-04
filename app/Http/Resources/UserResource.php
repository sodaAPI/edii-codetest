<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public static $wrap = false;

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'noktp' => $this->noktp,
            'tempattanggallahir' => $this->tempattanggallahir,
            'jeniskelamin' => $this->jeniskelamin,
            'agama' => $this->agama,
            'goldarah' => $this->goldarah,
            'status' => $this->status,
            'alamatktp' => $this->alamatktp,
            'alamattinggal' => $this->alamattinggal,
            'notelp' => $this->notelp,
            'huborangterdekat' => $this->huborangterdekat,
            'skill' => $this->skill,
            'bersediaditempatkan' => $this->bersediaditempatkan,
            'penghasilandiharap' => $this->penghasilandiharap,
            'pendidikanterakhir' => $this->pendidikanterakhir,
            'riwayatpelatihan' => $this->riwayatpelatihan,
            'riwayatpekerjaan' => $this->riwayatpekerjaan,
            'name' => $this->name,
            'email' => $this->email,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
