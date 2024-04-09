<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProjectImagesModel extends Model
{
    use HasFactory;

    protected $table = 'project_images';

    protected $fillable = ['name', 'parent_id'];

    public function projects(): BelongsTo
    {
        return $this->belongsTo(ProjectsModel::class, 'parent_id' , 'id');
    }
}
