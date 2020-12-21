/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {format, isToday} from 'date-fns';
import excerpts from 'excerpts';
import marked from 'marked';

import ClientSidebarNote from './SidebarNote.client';

export default function SidebarNote({note}) {
  const updatedAt = new Date(note.updated_at);
  const lastUpdatedAt = isToday(updatedAt)
    ? format(updatedAt, 'h:mm bb')
    : format(updatedAt, 'M/d/yy');
  const summary = excerpts(marked(note.body), {words: 20});
  return (
    <ClientSidebarNote id={note.id}>
      <header className="sidebar-note-header">
        <strong>{note.title}</strong>
        <small>{lastUpdatedAt}</small>
      </header>
      <button className="sidebar-note-open" />
    </ClientSidebarNote>
  );
}
