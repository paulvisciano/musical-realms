import { NoteEnum } from "../sounds/NoteEnum";
import { InstumentInterface, InstumentName } from "./InstrumentInterface";
import bowlAStrike from "../assets/sounds/Bowl_A_Strike.wav";
import bowlBStrike from "../assets/sounds/Bowl_B_Strike.wav";
import bowlCStrike from "../assets/sounds/Bowl_C_Strike.wav";
import bowlDStrike from "../assets/sounds/Bowl_D_Strike.wav";
import bowlEStrike from "../assets/sounds/Bowl_E_Strike.wav";
import bowlFStrike from "../assets/sounds/Bowl_F_Strike.wav";
import bowlGStrike from "../assets/sounds/Bowl_G_Strike.wav";
import bowlAGlide from "../assets/sounds/Bowl_A_Glide.wav";
import bowlBGlide from "../assets/sounds/Bowl_B_Glide.wav";
import bowlCGlide from "../assets/sounds/Bowl_C_Glide.wav";
import bowlDGlide from "../assets/sounds/Bowl_D_Glide.wav";
import bowlEGlide from "../assets/sounds/Bowl_E_Glide.wav";
import bowlFGlide from "../assets/sounds/Bowl_F_Glide.wav";
import bowlGGlide from "../assets/sounds/Bowl_G_Glide.wav";

export enum SoundBowlGestureEnum {
    Strike = "strike",
    Glide = "glide"
}

export class SingingBowl implements InstumentInterface {
    name = InstumentName.TibetanMetalSingingBowl;

    getSoundKey = (gesture : SoundBowlGestureEnum, note : NoteEnum) => `${gesture}${note.toUpperCase()}`;

    registerSounds = (soundsData : any) => {
        Object.values(SoundBowlGestureEnum).map(gesture => {
            Object.values(NoteEnum).map(note =>  {
                soundsData[this.getSoundKey(gesture, note)] = this.getSoundPath(note, gesture);
            });
        })
    };

    private getSoundPath = (note: NoteEnum, gesture: SoundBowlGestureEnum) => {
        let soundPath;

        switch (note) {
            case NoteEnum.A:
                soundPath = gesture === SoundBowlGestureEnum.Strike ? bowlAStrike : bowlAGlide;
                break;
            case NoteEnum.B:
                soundPath = gesture === SoundBowlGestureEnum.Strike ? bowlBStrike : bowlBGlide;
                break;
            case NoteEnum.C:
                soundPath = gesture === SoundBowlGestureEnum.Strike ? bowlCStrike : bowlCGlide;
                break;
            case NoteEnum.D:
                soundPath = gesture === SoundBowlGestureEnum.Strike ? bowlDStrike : bowlDGlide;
                break;
            case NoteEnum.E:
                soundPath = gesture === SoundBowlGestureEnum.Strike ? bowlEStrike : bowlEGlide;
                break;
            case NoteEnum.F:
                soundPath = gesture === SoundBowlGestureEnum.Strike ? bowlFStrike : bowlFGlide;
                break;
            case NoteEnum.G:
                soundPath = gesture === SoundBowlGestureEnum.Strike ? bowlGStrike : bowlGGlide;
                break;
            default:
                soundPath = null;
                break;
        }

        return soundPath;
    };
}