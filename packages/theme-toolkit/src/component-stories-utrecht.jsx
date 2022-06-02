import PropTypes from 'prop-types';
import React from 'react';

import { STORY_GROUPS } from './component-stories-util';

import {
  Button,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
  Separator,
  UnorderedList,
  UnorderedListItem,
  OrderedList,
  OrderedListItem,
  Document,
  // BadgeCounter,
  // BadgeData,
  // Blockquote,
  // CustomCheckbox ,
  // Emphasis,
  FormFieldDescription,
  Fieldset,
  FieldsetLegend,
  FormLabel,
  // FormToggle ,
  Link,
  // Page ,
  // PageContent ,
  PageFooter,
  // PageHeader ,
  // Pagination ,
  Select,
  SelectOption,
  Textarea,
  Textbox,
  Table,
  TableRow,
  TableHeader,
  TableBody,
  TableHeaderCell,
  TableCell,
  TableCaption,
} from '@utrecht/component-library-react';

const Blockquote = ({ children }) => <div className="utrecht-blockquote">{children}</div>;

Blockquote.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

const BadgeCounter = ({ children }) => <div className="utrecht-badge-counter">{children}</div>;

BadgeCounter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

const BadgeData = ({ children }) => <div className="utrecht-badge-data">{children}</div>;

BadgeData.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export const UTRECHT_COMPONENT_STORIES = [
  {
    storyId: 'react-utrecht-button--default',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Default Button',
    render: () => <Button>Default</Button>,
  },
  {
    storyId: 'react-utrecht-button--disabled',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Default Button: Disabled',
    state: true,
    render: () => <Button disabled>Default</Button>,
  },
  {
    storyId: 'react-utrecht-button--active',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Default Button: Active',
    state: true,
    render: () => <Button className="utrecht-button--active">Default</Button>,
  },
  {
    storyId: 'react-utrecht-button--hover',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Default Button: Hover',
    state: true,
    render: () => <Button className="utrecht-button--hover">Default</Button>,
  },
  {
    storyId: 'react-utrecht-button--focus',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Default Button: Focus',
    state: true,
    render: () => <Button className="utrecht-button--focus">Default</Button>,
  },
  {
    storyId: 'react-utrecht-button--focus-visible',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Default Button: Focus Visible',
    state: true,
    render: () => <Button className="utrecht-button--focus-visible">Default</Button>,
  },
  {
    storyId: 'react-utrecht-button--busy',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Default Button: Busy',
    state: true,
    render: () => <Button busy>Default</Button>,
  },
  {
    storyId: 'react-utrecht-button--submit',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Default Button: Submit Type',
    state: true,
    render: () => <Button type="submit">Default</Button>,
  },
  {
    storyId: 'react-utrecht-paragraph--default',
    group: STORY_GROUPS.PARAGRAPH,
    name: 'Utrecht Paragraph',
    render: () => <Paragraph>Default</Paragraph>,
  },
  {
    storyId: 'react-utrecht-paragraph--lead',
    group: STORY_GROUPS.PARAGRAPH,
    name: 'Utrecht Lead Paragraph',
    render: () => <Paragraph lead>Lead</Paragraph>,
  },
  {
    storyId: 'react-utrecht-heading-1--default',
    group: STORY_GROUPS.HEADINGS,
    name: 'Utrecht Heading 1',
    render: () => <Heading1>The Quick Brown Fox Jumps Over The Lazy Dog</Heading1>,
  },
  {
    storyId: 'react-utrecht-heading-2--default',
    group: STORY_GROUPS.HEADINGS,
    name: 'Utrecht Heading 2',
    render: () => <Heading2>The Quick Brown Fox Jumps Over The Lazy Dog</Heading2>,
  },
  {
    storyId: 'react-utrecht-heading-3--default',
    group: STORY_GROUPS.HEADINGS,
    name: 'Utrecht Heading 3',
    render: () => <Heading3>The Quick Brown Fox Jumps Over The Lazy Dog</Heading3>,
  },
  {
    storyId: 'react-utrecht-heading-4--default',
    group: STORY_GROUPS.HEADINGS,
    name: 'Utrecht Heading 4',
    render: () => <Heading4>The Quick Brown Fox Jumps Over The Lazy Dog</Heading4>,
  },
  {
    storyId: 'react-utrecht-heading-5--default',
    group: STORY_GROUPS.HEADINGS,
    name: 'Utrecht Heading 5',
    render: () => <Heading5>The Quick Brown Fox Jumps Over The Lazy Dog</Heading5>,
  },
  {
    storyId: 'react-utrecht-heading-6--default',
    group: STORY_GROUPS.HEADINGS,
    name: 'Utrecht Heading 6',
    render: () => <Heading6>The Quick Brown Fox Jumps Over The Lazy Dog</Heading6>,
  },
  {
    storyId: 'react-utrecht-unordered-list--default',
    group: STORY_GROUPS.LISTS,
    name: 'Utrecht Unordered list',
    render: () => (
      <UnorderedList>
        <UnorderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</UnorderedListItem>
        <UnorderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</UnorderedListItem>
      </UnorderedList>
    ),
  },
  {
    storyId: 'react-utrecht-ordered-list--default',
    group: STORY_GROUPS.LISTS,
    name: 'Utrecht Ordered list',
    render: () => (
      <OrderedList>
        <OrderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</OrderedListItem>
        <OrderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</OrderedListItem>
      </OrderedList>
    ),
  },
  {
    storyId: 'react-utrecht-separator--default',
    name: 'Utrecht Separator',
    render: () => <Separator />,
  },
  {
    storyId: 'react-utrecht-page-footer--default',
    name: 'Utrecht Page Footer',
    render: () => (
      <PageFooter>
        <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>
      </PageFooter>
    ),
  },
  {
    storyId: 'react-utrecht-textbox--default',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Utrecht Textbox',
    render: () => <Textbox />,
  },
  {
    storyId: 'react-utrecht-textbox--placeholder',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Textbox with placeholder',
    render: () => <Textbox placeholder="The Quick Brown Fox Jumps Over The Lazy Dog" />,
  },
  {
    storyId: 'react-utrecht-textbox--disabled',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Utrecht Textbox: Disabled',
    state: true,
    render: () => <Textbox disabled />,
  },
  {
    storyId: 'react-utrecht-textbox--hover',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Utrecht Textbox: Hover',
    state: true,
    render: () => <Textbox className="utrecht-textbox--hover" />,
  },
  {
    storyId: 'react-utrecht-textbox--focus',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Utrecht Textbox: Focus',
    state: true,
    render: () => <Textbox className="utrecht-textbox--focus" />,
  },
  {
    storyId: 'react-utrecht-textbox--focus-visible',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Utrecht Textbox: Focus Visible',
    state: true,
    render: () => <Textbox className="utrecht-textbox--focus-visible" />,
  },
  {
    storyId: 'react-utrecht-textbox--invalid',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Utrecht Textbox: Invalid',
    state: true,
    render: () => <Textbox invalid />,
  },
  {
    storyId: 'react-utrecht-textbox--readonly',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Utrecht Textbox: Read Only',
    render: () => <Textbox readOnly />,
  },
  {
    storyId: 'react-utrecht-textbox--required',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Utrecht Textbox: Required',
    render: () => <Textbox required />,
  },
  {
    storyId: 'react-utrecht-textarea--default',
    group: STORY_GROUPS.TEXTAREA,
    name: 'Utrecht Textarea',
    render: () => <Textarea />,
  },
  {
    storyId: 'react-utrecht-textarea--placeholder',
    group: STORY_GROUPS.TEXTAREA,
    name: 'Utrecht Textarea with placeholder',
    render: () => <Textarea placeholder="The Quick Brown Fox Jumps Over The Lazy Dog" />,
  },
  {
    storyId: 'react-utrecht-textarea--disabled',
    group: STORY_GROUPS.TEXTAREA,
    name: 'Utrecht Textarea: Disabled',
    state: true,
    render: () => <Textarea disabled />,
  },
  {
    storyId: 'react-utrecht-textarea--hover',
    group: STORY_GROUPS.TEXTAREA,
    name: 'Utrecht Textarea: Hover',
    state: true,
    render: () => <Textarea className="utrecht-textarea--hover" />,
  },
  {
    storyId: 'react-utrecht-textarea--focus',
    group: STORY_GROUPS.TEXTAREA,
    name: 'Utrecht Textarea: Focus',
    state: true,
    render: () => <Textarea className="utrecht-textarea--focus" />,
  },
  {
    storyId: 'react-utrecht-textarea--focus-visible',
    group: STORY_GROUPS.TEXTAREA,
    name: 'Utrecht Textarea: Focus Visible',
    state: true,
    render: () => <Textarea className="utrecht-textarea--focus-visible" />,
  },
  {
    storyId: 'react-utrecht-textarea--invalid',
    group: STORY_GROUPS.TEXTAREA,
    name: 'Utrecht Textarea: Invalid',
    state: true,
    render: () => <Textarea invalid />,
  },
  {
    storyId: 'react-utrecht-textarea--readonly',
    group: STORY_GROUPS.TEXTAREA,
    name: 'Utrecht Textarea: Read Only',
    render: () => <Textarea readOnly />,
  },
  {
    storyId: 'react-utrecht-textarea--required',
    group: STORY_GROUPS.TEXTAREA,
    name: 'Utrecht Textarea: Required',
    render: () => <Textarea required />,
  },
  {
    storyId: 'react-utrecht-table--default',
    name: 'Utrecht Table',
    render: () => (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column Heading Cell 1</TableHeaderCell>
            <TableHeaderCell scope="col">Column Heading Cell 2</TableHeaderCell>
            <TableHeaderCell scope="col">Column Heading Cell 3</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Row Heading Cell 1</TableHeaderCell>
            <TableCell>Data Cell 1</TableCell>
            <TableCell>Data Cell 2</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Row Heading Cell 2</TableHeaderCell>
            <TableCell>Data Cell 3</TableCell>
            <TableCell>Data Cell 4</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Row Heading Cell 3</TableHeaderCell>
            <TableCell>Data Cell 5</TableCell>
            <TableCell>Data Cell 6</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
  },
  {
    storyId: 'react-utrecht-table--caption',
    name: 'Utrecht Table with caption',
    render: () => (
      <Table>
        <TableCaption>Caption of the Table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column Heading Cell 1</TableHeaderCell>
            <TableHeaderCell scope="col">Column Heading Cell 2</TableHeaderCell>
            <TableHeaderCell scope="col">Column Heading Cell 3</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Row Heading Cell 1</TableHeaderCell>
            <TableCell>Data Cell 1</TableCell>
            <TableCell>Data Cell 2</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Row Heading Cell 2</TableHeaderCell>
            <TableCell>Data Cell 3</TableCell>
            <TableCell>Data Cell 4</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Row Heading Cell 3</TableHeaderCell>
            <TableCell>Data Cell 5</TableCell>
            <TableCell>Data Cell 6</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
  },
  {
    storyId: 'react-utrecht-select--default',
    group: STORY_GROUPS.SELECT,
    name: 'Utrecht Select',
    render: () => (
      <Select defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-select--disabled',
    group: STORY_GROUPS.SELECT,
    name: 'Utrecht Select: Disabled',
    state: true,
    render: () => (
      <Select disabled defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-select--invalid',
    group: STORY_GROUPS.SELECT,
    name: 'Utrecht Select: Invalid',
    state: true,
    render: () => (
      <Select invalid defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-select--required',
    group: STORY_GROUPS.SELECT,
    name: 'Utrecht Select: Required',
    render: () => (
      <Select required defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-select--readonly',
    group: STORY_GROUPS.SELECT,
    name: 'Utrecht Select: Read Only',
    render: () => (
      <Select readOnly defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-select--focus',
    group: STORY_GROUPS.SELECT,
    name: 'Utrecht Select: Focus',
    state: true,
    render: () => (
      <Select className="utrecht-select--focus" defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-select--focus-visible',
    group: STORY_GROUPS.SELECT,
    name: 'Utrecht Select: Focus Visible',
    state: true,
    render: () => (
      <Select className="utrecht-select--focus-visible" defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-badge-counter--default',
    group: STORY_GROUPS.BADGES,
    name: 'Utrecht Counter Badge',
    render: () => <BadgeCounter>42</BadgeCounter>,
  },
  {
    storyId: 'react-utrecht-badge-data--default',
    group: STORY_GROUPS.BADGES,
    name: 'Utrecht Data Badge',
    render: () => <BadgeData>Category 1</BadgeData>,
  },
  {
    storyId: 'react-utrecht-blockquote--default',
    name: 'Utrecht Blockquote',
    render: () => <Blockquote>The Quick Brown Fox Jumps Over The Lazy Dog</Blockquote>,
  },
  {
    storyId: 'react-utrecht-link--default',
    group: STORY_GROUPS.LINK,
    name: 'Utrecht Link',
    render: () => (
      <Link href="https://example.com" target="_new" external>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
  },
  {
    storyId: 'react-utrecht-link--hover',
    group: STORY_GROUPS.LINK,
    name: 'Utrecht Link: Hover',
    state: true,
    render: () => (
      <Link href="https://example.com" target="_new" external className="utrecht-link--hover">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
  },
  {
    storyId: 'react-utrecht-link--focus',
    group: STORY_GROUPS.LINK,
    name: 'Utrecht Link: Focus',
    state: true,
    render: () => (
      <Link href="https://example.com" target="_new" external className="utrecht-link--focus">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
  },
  {
    storyId: 'react-utrecht-link--focus-visible',
    group: STORY_GROUPS.LINK,
    name: 'Utrecht Link: Focus Visible',
    state: true,
    render: () => (
      <Link href="https://example.com" target="_new" external className="utrecht-link--focus-visible">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
  },
  {
    storyId: 'react-utrecht-link--visited',
    group: STORY_GROUPS.LINK,
    name: 'Utrecht Link: Visited',
    state: true,
    render: () => (
      <Link href="https://example.com" target="_new" external className="utrecht-link--visited">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
  },
  {
    storyId: 'react-utrecht-document--default',
    name: 'Utrecht Document',
    render: () => <Document>The Quick Brown Fox Jumps Over The Lazy Dog</Document>,
  },
  {
    storyId: 'react-utrecht-form-label--default',
    group: STORY_GROUPS.FORM_LABEL_DEFAULT,
    name: 'Utrecht Form Label',
    render: () => <FormLabel>Label for form control</FormLabel>,
  },
  {
    storyId: 'react-utrecht-form-label--disabled',
    group: STORY_GROUPS.FORM_LABEL_DEFAULT,
    name: 'Utrecht Form Label: Disabled',
    state: true,
    render: () => <FormLabel disabled>Label for disabled form control</FormLabel>,
  },
  {
    storyId: 'react-utrecht-form-label--checkbox',
    group: STORY_GROUPS.FORM_LABEL_CHECKBOX,
    name: ' Utrecht Checkbox Form Label',
    render: () => <FormLabel type="checkbox">Label for checkbox option</FormLabel>,
  },
  {
    storyId: 'react-utrecht-form-label--checkbox-checked',
    group: STORY_GROUPS.FORM_LABEL_CHECKBOX,
    name: 'Utrecht Checkbox Form Label: Checked',
    state: true,
    render: () => <FormLabel checked>Label for checked checkbox option</FormLabel>,
  },
  {
    storyId: 'react-utrecht-form-label--radio',
    group: STORY_GROUPS.FORM_LABEL_RADIO,
    name: 'Utrecht Radio Button Form Label',
    render: () => <FormLabel type="radio">Label for radio button option</FormLabel>,
  },
  {
    storyId: 'react-utrecht-form-label--radio-checked',
    group: STORY_GROUPS.FORM_LABEL_RADIO,
    name: 'Utrecht Radio Button Form Label: Checked',
    state: true,
    render: () => <FormLabel checked>Label for selected radio button option</FormLabel>,
  },
  // {
  //   storyId: 'react-utrecht-emphasis--stressed',
  //   group: STORY_GROUPS.EMPHASIS,
  //   name: 'Utrecht Stressed Emphasis',
  //   render: () => <Emphasis>The Quick Brown Fox Jumps Over The Lazy Dog</Emphasis>,
  // },
  // {
  //   storyId: 'react-utrecht-emphasis--strong',
  //   group: STORY_GROUPS.EMPHASIS,
  //   name: 'Utrecht Strong Emphasis',
  //   render: () => <Emphasis strong>The Quick Brown Fox Jumps Over The Lazy Dog</Emphasis>,
  // },
  // {
  //   storyId: 'react-utrecht-emphasis--double',
  //   group: STORY_GROUPS.EMPHASIS,
  //   name: 'Utrecht Double Emphasis',
  //   render: () => (
  //     <Emphasis>
  //       <Emphasis strong>The Quick Brown Fox Jumps Over The Lazy Dog</Emphasis>
  //     </Emphasis>
  //   ),
  // },
  {
    storyId: 'react-utrecht-form-fieldset--default',
    name: 'Utrecht Fieldset with legend',
    render: () => (
      <Fieldset>
        <FieldsetLegend>The Quick Brown Fox Jumps Over The Lazy Dog</FieldsetLegend>
        <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>
      </Fieldset>
    ),
  },
  {
    storyId: 'react-utrecht-form-field-description--default',
    group: STORY_GROUPS.FORM_FIELD_DESCRIPTION,
    name: 'Utrecht Form field description',
    render: () => <FormFieldDescription>The Quick Brown Fox Jumps Over The Lazy Dog</FormFieldDescription>,
  },
  {
    storyId: 'react-utrecht-form-field-description--invalid',
    group: STORY_GROUPS.FORM_FIELD_DESCRIPTION,
    name: 'Utrecht Form field description: Invalid',
    state: true,
    render: () => <FormFieldDescription invalid>The Quick Brown Fox Jumps Over The Lazy Dog</FormFieldDescription>,
  },
  {
    storyId: 'react-utrecht-form-field-description--valid',
    group: STORY_GROUPS.FORM_FIELD_DESCRIPTION,
    name: 'Utrecht Form field description: Valid',
    state: true,
    render: () => <FormFieldDescription valid>The Quick Brown Fox Jumps Over The Lazy Dog</FormFieldDescription>,
  },
  {
    storyId: 'react-utrecht-form-field-description--warning',
    group: STORY_GROUPS.FORM_FIELD_DESCRIPTION,
    name: 'Utrecht Form field description: Warning',
    render: () => <FormFieldDescription warning>The Quick Brown Fox Jumps Over The Lazy Dog</FormFieldDescription>,
  },
];
