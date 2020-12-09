import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * In this project, let's do the following:
 * 1. Make it so that I can select a Rover (optional), an Earth Day (optional),
 *    a Camera (optional), and/or Page
 * 2. Make it so that I can click into a Rover, see it's details, and
 *    filter its photos by earth day/camera/page
 * 3. From a Rover Page, I can click into a Camera, see the camera details, 
 *    and filter its photos by earth day/page
 * 4. From Camera Page, click back to Rover Page, or Home Page
 * 5. From Rover Page, click back to Home Page
 */

const defaultParams = {
  api_key: 'NmEfVgBODcenE6iJITMp7z29XB7yLUvwkmEOe0eI', // Get your own key and put it here
};

if(defaultParams.api_key === 'DEMO_KEY') console.warn('Go to https://api.nasa.gov and get your own API_KEY. It\'s easy!');

const roversApi = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
const photosApi = (roverName) => `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos`;

// Possible Params: earth_day, camera, page

@Component({
  selector: 'rc-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent  {
  rovers$ = this.http.get(roversApi, {params: defaultParams});
  data$ = this.http.get(photosApi('curiosity'), {
    params: {
      ...defaultParams,
      earth_date: '2019-09-01'
    }
  })

  constructor(private http: HttpClient) {

  }
}
