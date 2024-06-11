import { createAction } from '@reduxjs/toolkit';
import { LOCATION_CHANGE, LocationChangePayload } from 'connected-react-router';

export const locationChange =
  createAction<LocationChangePayload>(LOCATION_CHANGE);

export type { LocationChangePayload };
