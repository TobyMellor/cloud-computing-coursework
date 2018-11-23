#!/usr/bin/env node

import * as streamService from './services/stream-service';
import Mapper from './handlers/Mapper';

// Start streaming to the Mapper
streamService.handleInput(new Mapper());
