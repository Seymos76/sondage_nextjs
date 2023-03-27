export default
class Sondage {
  familiar_with_energy: string = '';
  what_did_bring_you_to_energetic: string = '';
  is_practician: string = '';
  in_which_domains_are_you?: string = '';
  subtiles_perceptions: Array<string> = [];
  is_interested_by_initiation: string = '';
  why_are_you_interested_by_initiation?: string;
  subjects: Array<string> = [];
  other_subjects?: string = '';
  content_type_preference: Array<string> = [];
  need_following: string = '';
  interested_by_immersion: string = '';
  group_size: string = '';
  why_are_you_interested_by_immersion?: string = '';
  time_for_immersion: string = '';
  custom_time_for_immersion?: string = '';
  have_you_some_questions: string = '';
  lead_email: string = '';
  agree_for_notification: boolean = false;
}
