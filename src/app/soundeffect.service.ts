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
  heartbeatSoundURL: any;
  bgm: any;
  bgmURL: any;
  creepyAmbient: any;

  constructor(private http: HttpClient) {}

  getHeartbeat() {
    return this.http.get(`${this.apiurl}` + "/332812/" + `${this.apikey}`);
  }

  getCreepyAmbient() {
    return this.http.get(`${this.apiurl}` + "/366887/" + `${this.apikey}`);
  }

  // getBreakWindow() {
  //   return this.http.get(`${this.apiurl}` + "/448004/" + `${this.apikey}`);
  // }

  // getKeyUnlock() {
  //   return this.http.get(`${this.apiurl}` + "/235467/" + `${this.apikey}`);
  // }

  // getDoorUnlock() {
  //   return this.http.get(`${this.apiurl}` + "/214000/" + `${this.apikey}`);
  // }

  // getScissorCutting() {
  //   return this.http.get(`${this.apiurl}` + "/457038/" + `${this.apikey}`);
  // }

  // getChairLeg() {
  //   return this.http.get(`${this.apiurl}` + "/328559/" + `${this.apikey}`);
  // }

  // getChiselSound() {
  //   return this.http.get(`${this.apiurl}` + "/461441/" + `${this.apikey}`);
  // }

  // getKeyCode() {
  //   return this.http.get(`${this.apiurl}` + "/399120/" + `${this.apikey}`);
  // }

  // playKeyUnlock() {
  //   this.getKeyUnlock().subscribe(response => {
  //     this.soundeffect = response;
  //     this.keyUnlockSoundURL = this.soundeffect.previews["preview-hq-mp3"];
  //     let keyUnlock = new Audio(this.keyUnlockSoundURL);
  //     keyUnlock.play();
  //   });
  // }

  playLowHeartbeat() {
    this.getHeartbeat().subscribe(response => {
      this.soundeffect = response;
      this.heartbeatSoundURL = this.soundeffect.previews["preview-hq-mp3"];
      this.heartbeat = new Audio(this.heartbeatSoundURL);
      this.heartbeat.volume = 0.3;
      this.heartbeat.play();
      this.heartbeat.loop = true;
    });
  }

  playMidHeartbeat() {
    this.heartbeat.volume = 0.6;
    this.heartbeat.play();
    this.heartbeat.loop = true;
  }

  playHighHeartbeat() {
    this.heartbeat.volume = 1;
    this.heartbeat.play();
    this.heartbeat.loop = true;
  }

  stopHeartbeat() {
    // this.heartbeat.loop = false;
    this.heartbeat.pause();
    this.heartbeat.currentTime = 0;
  }

  playCreepyAmbient() {
    this.getCreepyAmbient().subscribe(response => {
      this.bgm = response;
      this.bgmURL = this.bgm.previews["preview-hq-mp3"];
      this.creepyAmbient = new Audio(this.bgmURL);
      this.creepyAmbient.play();
      this.creepyAmbient.loop = true;
    });
  }

  stopCreepyAmbient() {
    // this.creepyAmbient.loop = false;
    this.creepyAmbient.pause();
    this.creepyAmbient.currentTime = 0;
  }
}
