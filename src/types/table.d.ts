export interface RadioType {
  disabled: boolean;
  value: any;
}
export interface IconHint {
  icon_hint?: string;
  status?: string;
}
export interface ListOfRecords {
  citizenship?: string;
  date_of_birth?: string;
  icon_hints?: IconHint;
  id?: string;
  markedAsHit?: boolean;
  primary_name?: string;
  score?: string;
  title?: string;
}
export interface Person {
  id: string;
  entityName?: string;
  salutation?: string;
  nationality?: string;
  dateOfBirth?: string;
  entityType?: string;
  description?: string | null;
  list?: ListOfRecords[] | null;
}
