/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import Note from './Note.server';
import NoteList from './NoteList.server';
import EditButton from './EditButton.client';
import SearchField from './SearchField.client';

export default function App({selectedId, isEditing}) {
  return (
    <div className="main">
      <section className="col sidebar">
        <section className="sidebar-header">
          <img
            className="logo"
            src="logo.svg"
            width="22px"
            height="20px"
            alt=""
            role="presentation"
          />
          <strong>React Notes</strong>
        </section>
        <section className="sidebar-menu" role="menubar">
          <SearchField />
          <EditButton noteId={null}>New</EditButton>
        </section>
        <nav>
          <NoteList />
        </nav>
      </section>
      <section key={selectedId} className="col note-viewer">
        <Note selectedId={selectedId} isEditing={isEditing} />
      </section>
    </div>
  );
}
