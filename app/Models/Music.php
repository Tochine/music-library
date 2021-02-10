<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Music extends Model
{
    use HasFactory;

    protected $table = 'music_tbl';

    protected $fillable = ['music_id', 'title', 'artist', 'genre', 'album'];
}
