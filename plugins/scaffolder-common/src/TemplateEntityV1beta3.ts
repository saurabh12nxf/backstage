/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Entity, JSONSchema } from '@backstage/catalog-model';
import { JsonObject } from '@backstage/types';
import v1beta3Schema from './Template.v1beta3.schema.json';

/**
 * Backstage catalog Template kind Entity. Templates are used by the Scaffolder
 * plugin to create new entities, such as Components.
 *
 * @public
 */
export interface TemplateEntityV1beta3 extends Entity {
  apiVersion: 'scaffolder.backstage.io/v1beta3';
  kind: 'Template';
  spec: {
    type: string;
    parameters?: JsonObject | JsonObject[];
    steps: Array<{
      id?: string;
      name?: string;
      action: string;
      input?: JsonObject;
      if?: string | boolean;
    }>;
    output?: { [name: string]: string };
    owner?: string;
  };
}

/**
 * JSON schema of the Template kind, apiVersion scaffolder.backstage.io/v1beta3.
 *
 * @public
 */
export const templateEntityV1beta3Schema: JSONSchema = v1beta3Schema as Omit<
  JSONSchema,
  'examples'
>;
