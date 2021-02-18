<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Music;
use Validator;
use Response;

class MusicController extends Controller
{
    
    public function form($form)
    {
        $formData = Form::findOrFail($form);
        return response()->json($formData);
    }

    public function formLab(Request $request)
    {
       


        $data = json_encode($request->all());


        
        $lab = Music::create([
            'title' => $data
        ]); 
       

        return unserialize($lab);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $musics = Music::all();
        //return response()->json($musics);
        if($musics->isEmpty()){
            return Response::json([
                'status' => false,
                'message' => 'No music found!',
                'music' => NULL
            ]);
        }else{
            return Response::json($musics);
        }

        
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
            'musicId' => 'required',
            'title' => 'required',
            'artist' => 'required',
            'genre' => 'required',
            'album' => 'required'
        ]);

        if($data->fails()){
            return response()->json(['message' => $data->errors()->all()], 400);
        }

        $music = Music::create([
            'music_id' => $request->musicId,
            'title' => $request->title,
            'artist' => $request->artist,
            'genre' => $request->genre,
            'album' => $request->album
        ]);

        //$music = Music::create([$data]);

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
            ], 201);
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
