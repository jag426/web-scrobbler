'use strict';

/* global Connector */

Connector.playerSelector = '#player';

Connector.getTrackArt = function() {
	return $('.song-row.currently-playing .column-content img').attr('src') || null;
};

Connector.artistSelector = '.song-row.currently-playing .column-content .song-artist';

Connector.trackSelector = '.song-row.currently-playing .column-content .song-title';

Connector.albumSelector = '.song-row.currently-playing .column-content .song-album';

Connector.currentTimeSelector = '#time_container_current';

Connector.durationSelector = '#time_container_duration';

Connector.isPlaying = function() {
	return $('#player *[data-id="play-pause"]').attr('playback-state') == 'playing';
};

Connector.isStateChangeAllowed = function() {
	return Connector.getArtist() !== 'Subscribe to go ad-free';
};
