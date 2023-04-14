export default
class Sondage {
  title: string = "Sondage pour guide multidimensionnel du 3e oeil";
  familiar_with_energy: string = '';
  what_did_bring_you_to_energetic: string = '';
  is_practician: string = '';
  in_which_domains_are_you?: string = '';
  subtiles_perceptions: Array<string> = [];
  is_interested_by_initiation: string = '';
  why_are_you_interested_by_initiation?: string;
  subjects: Array<string> = [];
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

  showTimeForImmersionField = () => {
    return 'false' === this.interested_by_immersion;
  }

  showTimeForImmersionOtherField = () => {
    return 'other' === this.time_for_immersion;
  }

  isInterestedByInitiation = () => {
    return 'true' === this.is_interested_by_initiation;
  }
  isInterestedByImmersion = () => {
    return 'true' === this.interested_by_immersion;
  }
  isFamiliar = () => {
    return 'true' === this.familiar_with_energy;
  }
  isPractician = () => {
    return 'true' === this.is_practician;
  }
  wantsOtherSubjects = () => {
    return this.subjects?.includes('other');
  }
}
