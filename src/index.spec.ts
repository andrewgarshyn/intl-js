/**
 * Copyright 2020, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-irregular-whitespace */

import { format, formatCurrency } from '.';

describe('Format', () => {
  describe('number', () => {
    it('should format with default options', () => {
      const actual = format(123456.789);
      expect(actual).toMatchInlineSnapshot(`"123.456,789"`);
    });

    it('should format for a specified locale', () => {
      const actual = format(123456.789, 'PT');
      expect(actual).toMatchInlineSnapshot(`"123.456,789"`);
    });
  });

  describe('currency', () => {
    it('should format with default options', () => {
      const actual = formatCurrency(123456.789);
      expect(actual).toMatchInlineSnapshot(`"R$ 123.456,79"`);
    });

    it('should format for a specified locale', () => {
      const actual = formatCurrency(123456.789, 'PT');
      expect(actual).toMatchInlineSnapshot(`"€ 123.456,79"`);
    });
  });
});
