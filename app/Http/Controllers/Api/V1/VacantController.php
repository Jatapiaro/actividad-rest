<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller as BaseController;

use App\Models\Vacant;
use App\Http\Resources\Vacant as VacantResource;

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
     * @param  \App\Models\Vacant $vacant
     * @return \Illuminate\Http\Response
     */
    public function show(Vacant $vacant)
    {
        return new VacantResource($vacant);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Vacant $vacant
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vacant $vacant)
    {
        $vacantData = $request->input('vacant');
        $vacant = VacantService::Update($vacant, $vacantData);
        return new VacantResource($vacant);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vacant $vacant
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vacant $vacant)
    {
        $vacant->delete();
        return new VacantResource($vacant);
    }

}
