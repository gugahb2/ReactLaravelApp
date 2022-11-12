<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Asset extends Model
{
    public function poster() {
    	return $this->belongsTo(Poster::class);
    }
}
