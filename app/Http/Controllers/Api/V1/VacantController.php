<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller as BaseController;

use App\Models\Vacant;
use App\Http\Resources\Vacant as VacantResource;

use VacantService;

class VacantController extends BaseController
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vacancies = Vacant::all();
        return VacantResource::collection($vacancies);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $vacantData = $request->input('vacant');
        $vacant = VacantService::Create($vacantData);
        return new VacantResource($vacant);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vacant $vacancy
     * @return \Illuminate\Http\Response
     */
    public function show(Vacant $vacancy)
    {
        return new VacantResource($vacancy);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Vacant $vacant
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vacant $vacancy)
    {
        $vacantData = $request->input('vacant');
        $vacancy = VacantService::Update($vacancy, $vacantData);
        return new VacantResource($vacancy);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vacant $vacant
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vacant $vacancy)
    {
        $vacancy->delete();
        return new VacantResource($vacancy);
    }

}
