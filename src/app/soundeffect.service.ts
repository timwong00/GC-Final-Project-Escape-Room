import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SoundeffectService {
  apiurl = "https://freesound.org/apiv2/sounds";
  apikey = "?token=iiUhsGYnfh0aoVwFkiwBB1xqtAQj3Bpt2hPcPTq2";

  heartbeat: any;
  soundeffect: any;
  keyUnlockSoundURL:any;
  constructor(private http: HttpClient) {}

  getHeartbeat() {
    return this.http.get(`${this.apiurl}` + "/332812/" + `${this.apikey}`);
  }

  getBreakWindow() {
    return this.http.get(`${this.apiurl}` + "/448004/" + `${this.apikey}`);
  }

  getKeyUnlock() {
    return this.http.get(`${this.apiurl}` + "/235467/" + `${this.apikey}`);
  }

  getDoorUnlock() {
    return this.http.get(`${this.apiurl}` + "/214000/" + `${this.apikey}`);
  }

  getScissorCutting() {
    return this.http.get(`${this.apiurl}` + "/457038/" + `${this.apikey}`);
  }

  getChairLeg() {
    return this.http.get(`${this.apiurl}` + "/328559/" + `${this.apikey}`);
  }

  getChiselSound() {
    return this.http.get(`${this.apiurl}` + "/461441/" + `${this.apikey}`);
  }

  getKeyCode() {
    return this.http.get(`${this.apiurl}` + "/399120/" + `${this.apikey}`);
  }
 
  playKeyUnlock(){
    this.getKeyUnlock().subscribe(response => {
      this.soundeffect = response;
      this.keyUnlockSoundURL = this.soundeffect.previews["preview-hq-mp3"];
      let keyUnlock = new Audio(this.keyUnlockSoundURL);
      keyUnlock.play();
    });
  }

  // playKeyUnlock() {
  //   let keyUnlock = new Audio(this.keyUnlockSoundURL);
  //   keyUnlock.play();
  // }
}
