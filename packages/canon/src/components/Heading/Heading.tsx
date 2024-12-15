/*
 * Copyright 2024 The Backstage Authors
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

import React, { forwardRef } from 'react';
import { HeadingProps } from './types';
import { useTheme } from '../../theme/context';
import { getResponsiveValue } from '../../utils/getResponsiveValue';

export const Heading = forwardRef<HTMLParagraphElement, HeadingProps>(
  (props, ref) => {
    const { children, variant = 'title1', ...restProps } = props;
    const { breakpoint } = useTheme();
    const responsiveVariant = getResponsiveValue(variant, breakpoint);

    console.log(breakpoint);
    console.log(responsiveVariant);

    return (
      <p
        ref={ref}
        {...restProps}
        className={`text ${
          responsiveVariant ? `text-${responsiveVariant}` : ''
        }`}
      >
        {children}
      </p>
    );
  },
);

Heading.displayName = 'Heading';
