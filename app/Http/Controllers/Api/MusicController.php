<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Music;
use Validator;

class MusicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $musics = Music::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //dd($request);
        $data = Validator::make($request->all(), [
            'music_id' => 'required',
            'title' => 'required',
            'artist' => 'required',
            'genre' => 'required',
            'album' => 'required'
        ]);

        if($data->fails()){
            return response()->json(['message' => $data->errors()->all()], 400);
        }

        $music = Music::create([
            'music_id' => $request->music_id,
            'title' => $request->title,
            'artist' => $request->artist,
            'genre' => $request->genre,
            'album' => $request->album
        ]);
        
        if(is_null($music)){
            return response()->json([
                'status' => false,
                'message' => 'Unable to save new music details',
                'data' => NULL
            ]);
        }else{
            return response()->json([
                'status' => true,
                'message' =>  "Music stored successfullu",
                'data' => $music
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}