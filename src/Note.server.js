/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {fetch} from 'react-fetch';
import {format} from 'date-fns';

import TextWithMarkdown from './TextWithMarkdown';

export default function Note({selectedId}) {
  const note =
    selectedId != null
      ? fetch(`http://localhost:4000/notes/${selectedId}`).json()
      : null;

  if (note === null) {
    return (
      <div className="note--empty-state">
        <span className="note-text--empty-state">
          Click a note on the left to view something! 🥺
        </span>
      </div>
    );
  }

  let {id, title, body, updated_at} = note;
  const updatedAt = new Date(updated_at);

  return (
    <div className="note">
      <div className="note-header">
        <h1 className="note-title">{title}</h1>
        <div className="note-menu" role="menubar">
          <small className="note-updated-at" role="status">
            Last updated on {format(updatedAt, "d MMM yyyy 'at' h:mm bb")}
          </small>
          <button className="edit-button">Edit</button>
        </div>
      </div>
      <div className="note-preview">
        <TextWithMarkdown text={body} />
      </div>
    </div>
  );
}
