<?php

namespace App\Http\Controllers;

use DB;
use App\Group;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class AssetController extends Controller
{
    private $urlForButton1 = 'http://www.omdbapi.com/?s=Matrix&apikey=720c3666';
    private $urlForButton2 = 'http://www.omdbapi.com/?s=Matrix%20Reloaded&apikey=720c3666';
    private $urlForButton3 = 'http://www.omdbapi.com/?s=Matrix%20Revolutions&apikey=720c3666';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {

    }

    public function getAssetForButton1() {
        $response = $this->storeAndGetAssets($this->urlForButton1);
        return response()->json($response);
    }

    public function getAssetForButton2() {
        $response = $this->storeAndGetAssets($this->urlForButton2);
        return response()->json($response);
    }

    public function getAssetForButton3() {
        $response = $this->storeAndGetAssets($this->urlForButton3);
        return response()->json($response);
    }

    private function storeAndGetAssets(string $fetchUrl) {
        try {
            $response = Http::get($fetchUrl);
            $assetData = $response['Search'];
            foreach ($assetData as $assetObject) {
                if (!$this->isExistInDB($assetObject)) {
                    $posterId = $this->createAndGetPoster($assetObject);
                    $newAsset = [
                        'title' => $assetObject['Title'],
                        'year' => $assetObject['Year'],
                        'imdbID' => $assetObject['imdbID'],
                        'type' => $assetObject['Type'],
                        'posterId' => $posterId
                    ];
                    DB::table('assets')->insert($newAsset);
                }
            }

            return $assetData;
        } catch (Exception $e) {
            return null;
        }
    }

    private function isExistInDB($asset) {
        return DB::table('assets')
            ->where('imdbID', $asset['imdbID'])
            ->exists();
    }

    private function createAndGetPoster($asset) {
        $posterUrl = $asset['Poster'];
        if (empty($posterUrl) || $posterUrl === 'N/A') return null;

        try {
            $poster = DB::table('posters')->where('posterUrl', $posterUrl)->first();
            if ($poster) return $poster['id'];
            return DB::table('posters')->insertGetId(['posterUrl' => $posterUrl]);
        } catch (Exception $e) {
            return null;
        }
    }
}
