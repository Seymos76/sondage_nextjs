import Sondage from "@/components/Sondage";

export default
class SondageResource {
    familiar_with_energy: string = '';
    what_did_bring_you_to_energetic: string = '';
    is_practician: string = '';
    in_which_domains_are_you?: string = '';
    subtiles_perceptions: string = '';
    is_interested_by_initiation: string = '';
    why_are_you_interested_by_initiation?: string;
    subjects: string = '';
    other_subjects?: string = '';
    content_type_preference: string = '';
    need_following: string = '';
    interested_by_immersion: string = '';
    group_size: string = '';
    why_are_you_interested_by_immersion?: string = '';
    time_for_immersion: string = '';
    custom_time_for_immersion?: string = '';
    have_you_some_questions: string = '';
    lead_email: string = '';
    agree_for_notification: boolean = false;

    constructor() {
    }

    build(props: Sondage, entries: Array<string>) {
        entries.forEach((value: string, index: number) => {
            if ("subtiles_perceptions" !== value || "subjects" !== value) {
                this[value] = props[value];
            }
        });
        /*props.subtiles_perceptions.forEach((value: string, index: number) => {
            this.subtiles_perceptions += value + ', ';
        });
        props.subjects.forEach((value: string, index: number) => {
            this.subjects += value + ', ';
        });*/
    }

}
