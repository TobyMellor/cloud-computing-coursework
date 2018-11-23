#!/usr/bin/env node

import * as streamService from './services/stream-service';
import Reducer from './handlers/Reducer';

// Start streaming to the Reducer
streamService.handleInput(new Reducer());
