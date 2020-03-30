import webtor from '@webtor/platform-sdk-js';
import MediaElement from 'MediaElement';

var $ = require('jquery');
require('bootstrap');
require('popper.js');
require('datatables');
require('../js/dataTables.responsive.min.js');
require('../js/dataTables.bootstrap4.min.js');
require('../js/getmime.js')();

const magnet = require('magnet-uri')
const parsed = magnet.decode(magnetUri);
const parsedHash = parsed.infoHash;
const apiUrl = "https://api.webtor.io";
const apiKey = "a65d3aad-ad55-40b5-9922-598aed7c69d9";
const tokenUrl = 'https://dltorrent.com/tokens';
const downloadUrl = 'https://api.qorm.xyz';
const badWordUrl = "https://dltorrent.com/badwords";

const allowedHash = "08ada5a7a6183aae1e09d831df6748d566095a10";
const poster_keywords = ["poster", "cover"];
const sub_ext = ['VTT', 'SRT'];
const img_ext = ['JPG', 'JPEG', 'GIF', 'PNG'];
const renewTokenTime = 1000 * 60 * 1;
const expireTime = 24 * 60 * 60;

var tokenNum = 0;
var player;
var statClient;
var seeder;
var tracks = [];
var poster = "";
var urlSub;
var generatedUrl = [];

async function tokenget() {
	if(tokenNum == 0) {
		tokenNum++;
		return tokenReq;
	} else {
		var $ajax_token = $("#ajax_token").val();
		var result = 0;
		$.ajax({
			async: false,
			type: "POST",
			global: false,
			data:{magnet: parsedHash, prevHash: tokenReq, ajax_token: $ajax_token},
			url: tokenUrl,
			success:function(data){
				var dataRec = $.parseJSON(data);
				$("#ajax_token").val(dataRec.csrf);

				result = dataRec.token;
			},
			error:function(){
				result = 0;
			}
		});
		return result;
	}
}

const sdk = webtor({
	apiKey: apiKey,
	apiUrl: apiUrl,
	downloadUrl: downloadUrl,
	//tokenUrl: tokenUrl,
	getToken: tokenget,
	tokenRenewInterval: renewTokenTime,
});


$(document).on('click', '.openit', async function (ev) {
	var path = $(this).data("path");
	var hash = $(this).data("hash");
	var type = $(this).data("type");
	var id = $(this).data("id");
	var present = 1;
	
	if($('body').find('#showmodal').data("id") !== id) {
		present = 0;
		$('video, audio').each(function() {
			  $(this)[0].pause();
		});
		
		$('body').find('#showmodal').remove();
		var modalMess =
		'<div class="modal modal-fullscreen fade" id="showmodal" data-id="'+id+'" tabindex="-1" role="dialog" aria-labelledby="showmodal" aria-hidden="true">'+
			'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
			  '<span aria-hidden="true">&times;</span>'+
			'</button>'+
			'<div class="modal-dialog" role="document">'+
			'<div class="modal-content">'+

			  '<div class="modal-body">'+
			  '<div id="cloud"></div></div>'+
			  
			  '<div class="modal-footer">'+
				'<button type="button" class="btn btn-success stats" style="display:none" id="stat-modal-'+id+'" disabled="disabled"><span class="status"></span></button>'+ 
				'<button type="button" class="btn btn-info peer-stats" style="display:none" id="peer-stat-modal-'+id+'" disabled="disabled"><span class="peer-status"></span></button>'+ 
				'<button type="button" class="btn btn-default" data-dismiss="modal">'+close_button+'</button>'+

			  '</div>'+
			'</div>'+
			'</div>'+
		'</div>';



		if (!$('#showmodal').length) {
			$('body').append(modalMess);
		}
		
	}
	$('#showmodal').modal({
		show: true,
		backdrop: 'static',
		keyboard: false
	});

	/*setTimeout( function() {
		$(".modal-backdrop").addClass("modal-backdrop-transparent");
	}, 0);*/

	if(present == 0) {
		return await streamUrl(path, hash, id, type);
	}

	  
});

$(document).on('click', '.downloadit', async function (ev) {
	var path = $(this).data("path");
	var hash = $(this).data("hash");
	
	return await dlUrl(path, hash);
	  
});

$(document).on('click', '.zipit', async function (ev) {
	var hash = $(this).data("hash");
	var name = $(this).data("name");
	
	return await dlZip(hash, name);
	  
});

function showFile(type, url, id, infoHash) {
	
	var message = "";

	if(type == "image") {
		message = '<div class="text-center gray-bg"><img src="'+url+'"/></div>';
		$('#showmodal .modal-body').append(message);
	} else if (type == "video") {
		var track_html;// = '<track id="textsub" src="" kind="subtitles" srclang="text" label="Text"><track id="linksub" src="" kind="subtitles" srclang="remotelink" label="Remote Link">';
		
		$('#showmodal #cloud').css("margin-top","-8px");
		
		var filepath = "";
		tracks.forEach((element) => {
		  filepath = element.pathname;
		  filepath = decodeURIComponent(filepath);
		  
		  filepath = filepath.split('/').pop();
		  filepath = filepath.substring(0, filepath.length - 4);

		  track_html += '<track src="'+element+'" kind="subtitles" srclang="'+filepath+'" label="'+filepath+'">';
		})
		
		message = '<video autoplay id="player" controls  preload="metadata" poster="'+poster+'" crossorigin="anonymous">'+
		'<source src="'+url+'">'+
		track_html+
        '</video>';
		
		$('#showmodal .modal-body').append(message);
		
		var v = document.getElementsByTagName("video")[0];
		
		
	/*var video = v,
		i,
		track,
		loadwebvtt = document.getElementById("loadwebvtt"),
		loadcues = document.getElementById("loadcues"),
		hideTracks = function() {
			// Oddly, there's no way to remove a track from a video, so hide them instead
			for (i = 0; i < v.textTracks.length; i++) {
				v.textTracks[i].mode = "hidden";
			}
		};
	
		loadwebvtt.addEventListener("click", function() {
			hideTracks();
			track = document.createElement("track");
			track.kind = "captions";
			track.label = "Remote Link";
			track.srclang = "Remote Link";
			track.src = "https://api.webtor.io/08ada5a7a6183aae1e09d831df6748d566095a10/Sintel%2FSintel.pl.srt~vtt?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODQyNzUzNzF9.ZLWHk8lOfwfXkQhVLSvShgBa9_24xAp3nNBeW4xZiFY&api-key=a65d3aad-ad55-40b5-9922-598aed7c69d9";
			v.appendChild(track);
			track.addEventListener("load", function() {
				this.mode = "showing";
				v.textTracks[0].mode = "showing"; // thanks Firefox
			});
			
		});*/
		
		/*loadcues.addEventListener("click", function() {
			hideTracks();
			track = video.addTextTrack("captions", "English", "en");
			track.mode = "showing";
			track.addCue(new VTTCue(0, 12, "Loaded Cues"));
			track.addCue(new VTTCue(18.7, 21.5, "This blade has a dark past."));
			track.addCue(new VTTCue(22.8, 26.8, "It has shed much innocent blood."));
			track.addCue(new VTTCue(29, 32.45, "You're a fool for traveling alone, so completely unprepared."));
			track.addCue(new VTTCue(32.75, 35.8, "You're lucky your blood's still flowing."));
			track.addCue(new VTTCue(36.25, 37.3, "Thank you."));
			track.addCue(new VTTCue(38.5, 40, "So..."));
			track.addCue(new VTTCue(40.4, 44.8, "What brings you to the land of the gatekeepers?"));
			track.addCue(new VTTCue(46, 48.5, "I'm searching for someone."));
			track.addCue(new VTTCue(49, 53.2, "Someone very dear? A kindred spirit?"));
			track.addCue(new VTTCue(54.4, 56, "A dragon."));
			track.addCue(new VTTCue(58.85, 61.75, "A dangerous quest for a lone hunter."));
			track.addCue(new VTTCue(62.95, 65.87, "I've been alone for as long as I can remember."));
			track.addCue(new VTTCue(118.25, 119.5, "We're almost done. Shhh..."));
		});*/
		
		/*loadcues.addEventListener("click", function() {
		  hideTracks();
		  track = document.createElement("track");
		  track.kind = "subtitles";
		  track.label = "Text";
		  track.srclang = "Text";
		  track.addEventListener("load", function() {
			this.mode = "showing";
			v.textTracks[0].mode = "showing"; // thanks Firefox 
		  });
		  // Here I just call trim() to get WEBVTT as 6 first characters
		  var vttText = document.getElementById("source").value.trim();
		  var vttBlob = new Blob([vttText], {
			type: 'text/plain'
		  });
		  track.src = URL.createObjectURL(vttBlob);
		  v.appendChild(track);
		  console.log(track);

		  
		});*/
		var x = $(window).width();  
		var y = $(window).height(); 
		
		$(window).resize(function() {   
		  var x = $(window).width();    
		  var y = $(window).height();   
		});
	
		player = new MediaElementPlayer(v, {
				features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'fullscreen'],
				success: function (mediaElement, originalNode) {
					// do things
					mediaElement.addEventListener('captionschange', function(e) {
						//console.log("caption changed");
						var alerts = $(".alert-container");

						alerts.slideDown();
						window.setTimeout(function() {
							alerts.slideUp();
						}, 4000);
					});
					
					/*mediaElement.addEventListener('loadeddata', function() {
						console.log('addEventListener - loadeddata');
						window.setTimeout(function() {
							if($("#showmodal").height() <= $(window).height()) {

							   $("body").css('padding-right','0');
							   

							} else {

							}
						}, 2000);
						

						
					}, false);*/
					
					mediaElement.addEventListener('playing', function(e) {
					   $('#showmodal #cloud').hide();
					});
					
				},
				hls: {
					startPosition: 0,
					autoStartLoad: true,
					manifestLoadingTimeOut: 1000 * 60 * 10,
					manifestLoadingMaxRetry: 100,
					manifestLoadingMaxRetryTimeout: 1000 * 10,
					fragLoadingTimeOut: 1000 * 60 * 10,
					fragLoadingMaxRetry: 100,
					fragLoadingMaxRetryTimeout: 1000 * 10,
				},
				stretching: 'responsive',
				// if set, overrides <video width>
				videoWidth: '100%',
				// if set, overrides <video height>
				videoHeight: '100%',
				// width of audio player
				//audioWidth: 400,
				// height of audio player
				//audioHeight: 30,
				// initial volume when the player starts
				//startVolume: 0.8,
				// useful for <audio> player loops
				loop: false,
				// enables Flash and Silverlight to resize to content size
				enableAutosize: true,
				defaultVideoWidth: x, 
				defaultVideoHeight: y
		});
		
	} else if (type == "music" || type == "audio") {

		var post_image = "";
		var style_position = "position: absolute;top: 50%;";
		
		if(poster) {
			post_image = '<div class="text-center gray-bg"><img src="'+poster+'"/></div>';
			style_position = "position: absolute;bottom: 0;";
		}

		message = post_image+'<div style="'+style_position+'"><audio style="'+style_position+'" autoplay id="player" controls  preload="auto" src="'+url+'"></audio></div>';
		$('#showmodal .modal-body').append(message);
		
		var x = $(window).width();  
		var y = $(window).height(); 

		$(window).resize(function() {   
		  var x = $(window).width();    
		  var y = $(window).height();   
		});
		
		var v = document.getElementsByTagName("audio")[0];
		player = new MediaElementPlayer(v, {
				features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'fullscreen'],
				success: function (mediaElement, originalNode) {
					/*mediaElement.addEventListener('loadeddata', function() {
						mediaElement.play();
					}, false);*/
					mediaElement.addEventListener('playing', function(e) {
					   $('#showmodal #cloud').hide();
					});

				},
				stretching: 'responsive',
				// if set, overrides <video width>
				videoWidth: '100%',
				// if set, overrides <video height>
				videoHeight: '100%',
				// width of audio player
				//audioWidth: 400,
				// height of audio player
				//audioHeight: 30,
				// initial volume when the player starts
				//startVolume: 0.8,
				// useful for <audio> player loops
				loop: false,
				// enables Flash and Silverlight to resize to content size
				enableAutosize: true,
				defaultVideoWidth: x, 
				defaultVideoHeight: y
		});
	}

}

async function streamUrl(filePath, infoHash, id, type) {


	const seeder = sdk.seeder.get(infoHash);
	
	var extension = filePath.split('.').pop().toUpperCase();
	
	var url;
	
	if(!generatedUrl[filePath]) {
		if(extension.toUpperCase() == "MP4") {
			url = await seeder.url(filePath);
		} else {
			url = await seeder.streamUrl(filePath);
		}
		
		generatedUrl[filePath] = url;
	} else {
		url = generatedUrl[filePath];
	}
		
	// NOTE: stats will become available only after content url access
	try { statClient.close(); } catch(e) { }
	statClient = seeder.stats(filePath, (path, data) => {

		$(".stats").hide();
		$(".lds-ripple").hide();
		
		$("#stat-"+id).show();
		$("#stat-modal-"+id).show();
		$("#peer-stat-modal-"+id).show();
		
		$("#load-"+id).show();
		
		$("#stat-"+id+" .status").html(completed_text+": "+formatBytes(data.completed));
		$("#stat-"+id+" .peer-status").html(peers_text+': '+data.peers);
		$("#stat-modal-"+id+" .status").html(completed_text+": "+formatBytes(data.completed) + ' / '+formatBytes(data.total));
		$("#peer-stat-modal-"+id+" .peer-status").html(peers_text+': '+data.peers);
		
		var percent = ((data.completed/data.total) * 100).toFixed(0);
		
		if(img_ext.includes(extension.toUpperCase())) {
			var percentCompare = 90;
			
			if(data.status == 1 && percent >= percentCompare) {
				$('#showmodal #cloud').hide();
			}
		}
		
	});
	
	showFile(type, url, id, infoHash);
}

async function dlUrl(filePath, infoHash) {

	const seeder = sdk.seeder.get(infoHash);
	const url = await seeder.downloadUrl(filePath);
	
	window.open(url,"_self");
	
	

	return url;
}

async function dlZip(infoHash, name) {

	const seeder = sdk.seeder.get(infoHash);
	const url = await seeder.zipUrl("/"+name);
	
	window.open(url,"_self");

	return url;
}

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

async function checkBadWords(badWords, parsedDn, Hash) {
	var $ajax_token = $("#ajax_token").val();
	var result = 3;
	$.ajax({
		async: false,
		type: "POST",
		global: false,
		data:{words:badWords,  parseddn: parsedDn, hash: Hash, ajax_token: $ajax_token},
		url: badWordUrl,
		success:function(data){
			var dataRec = $.parseJSON(data);
			$("#ajax_token").val(dataRec.csrf);
			
			result = dataRec.response;
		},
		error:function(){
			result = 3;
		}
	});
	return result;
}

/*async function checkUserAllowed(magnet) {
	return $.ajax({
		async: false,
		type: "POST",
		global: false,
		data:{magnet:magnet},
		'url': "http://localhost/token/allowed.php",
		success:function(data){
			return data;
		},
		error:function(){
			return 2;
		}
	});
}*/

async function beforeMain(magnetUri) {

	var resBW; // Blacklist Words
	
    const torrent = await sdk.magnet.fetchTorrent(magnetUri);

    await sdk.torrent.push(torrent, expireTime);
	var torrent_infohash = torrent.infoHash;
	
    const seeder = sdk.seeder.get(torrent_infohash);
	
	if(torrent.files.length > 0) {
		if(torrent.files.length > 1) {
		  var zipDownload = '<a href="#!" class="btn btn-primary zipit" data-name="'+torrent.name+'" data-hash="'+torrent_infohash+'">'+download_text+'</a>';
		  $("#download-zip").html(zipDownload);	
		}
		
		if(torrent_infohash !== allowedHash) {
			//Check if the title are not prohibited
			var badWords = JSON.stringify(torrent.files);

			resBW = await checkBadWords(badWords, parsed.dn, parsedHash);
		} else {
			resBW = 0;
		}
		
		if(resBW == 0) {
			$.each(torrent.files, async function( index, file ) {
			  var file_name = file.name;
			  var extension = file_name.split('.').pop();
			  var file_path = file.path;
			  
			  //Subtitles
			  if(sub_ext.includes(extension.toUpperCase())) {
				if(extension.toUpperCase() == "VTT") {
					urlSub = await seeder.url(file_path);
				} else {
					urlSub = await seeder.streamUrl(file_path);
				}

				tracks.push(urlSub);
			  }
			  
			  //Poster
			  if (poster_keywords.some(v => file_name.toLowerCase().includes(v))) {
				poster = await seeder.url(file_path);
			  }
			  
			  if(poster == "") {
				//Count number of images inside torrent and use the first one
				var i = 0;
				var poster_path = "";
				if(img_ext.includes(extension.toUpperCase())) {
					if(i == 0) {
						poster_path = file_path;
					}
					i++;
				}
				
				if(i == 1) {
					poster = await seeder.url(poster_path);
				}
			  }
			  
			  var mime = getMime(extension);
			  var size = formatBytes(file.length);
			  var icon = iconImg(mime);
			  var stat = slugify(file_path);
			  //const downloadUrl = await seeder.downloadUrl(file.path);
			  //console.log(downloadUrl);
			  
			  var color_css = "";
			  
			  if(icon == "video") {
				color_css = " style=\"color:#f9f9f9;background:#cb62f6\"";
			  }
			  
			  var viewLink = '<i class="fas fa-eye-slash" style="font-size: 2em;color:#eee"></i>';
			  var openClass = 'class="downloadit"';
			  if(icon == "video" || icon == "audio" || icon == "image") {
				icon = (icon == "audio") ? "music" : icon;
				var viewLink = '<a href="#!" class="openit" data-path="'+file_path+'" data-hash="'+torrent_infohash+'" data-type="'+icon+'" data-id="'+stat+'"><i class="fas fa-eye" style="font-size: 2em;color:#bbb"></i></a>';
				openClass = 'class="openit"';
			  }

			  var trtable = '          <tr>'+
				'            <td>'+
				'              <a href="#!" '+openClass+' data-path="'+file_path+'" data-hash="'+torrent_infohash+'" data-type="'+icon+'" data-id="'+stat+'">'+
				'                <div class="d-flex align-items-center">'+
				'                  <div class="avatar avatar-blue mr-3" '+color_css+'>'+
				'						<i class="fas fa-'+icon+'"></i>'+
				'						<div class="lds-ripple" id="load-'+stat+'" style="position:absolute;margin-left:-29px;margin-top:2px;display:none"><div></div><div></div></div>'+
				'				   </div>'+
				'                  <div class="margin-top:-5px">'+
				'                    <p class="font-weight-bold mb-0">'+file_name+' <span  style="display:none" class="stats" id="stat-'+stat+'"><br/><span class="badge badge-success badge-success-alt status"></span> <span class="badge badge-info badge-info-alt peer-status"></span></span></p>'+
				'                    <p class="text-muted mb-0">'+mime.toUpperCase()+'</p>'+
				'                  </div>'+
				'                </div>'+
				'              </a>'+
				'            </td>'+
				'            <td>'+extension.toUpperCase()+'</td>'+
				'            <td>'+size+'</td>'+
				'            <td>'+viewLink+
				'            </td>'+
				'            <td><a href="#!" class="downloadit" data-path="'+file_path+'" data-hash="'+torrent_infohash+'"><i class="fas fa-download" style="font-size: 2em;color:#bbb"></i></a>'+
				'            </td>'+
				'          </tr>';
				
				$("#torrent-table").append(trtable);

			});
		
		} else if(resBW == 1) {
			$("#loading").hide();
			setTimeout(function() {$("#main-container").hide();}, 200);
			$("#blocked").show();
		} else if(resBW == 2) {
			$("#loading").hide();
			setTimeout(function() {$("#main-container").hide();}, 200);
			$("#size").show();
		} else {
			$("#loading").hide();
			setTimeout(function() {$("#main-container").hide();}, 200);
			$("#error").show();
		}

		
		
	}
}

async function main() {

	try {
		await beforeMain(magnetUri);
		
		$("#loading").hide();
		$("#main-container").show();

		setTimeout(datatableTrans, 100);

	} catch (e) {
		$("#loading").hide();
		$("#main-container").hide();
		$("#error").show();
	}

}

$.fn.dataTable.ext.type.order['file-size-pre'] = function ( data ) {
	var matches = data.match( /^(\d+(?:\.\d+)?)\s*([a-z]+)/i );
	
	var multipliers;
	console.log(website_lang);
	if(website_lang == "fr") {
		multipliers = {
			o:  1,
			octets: 1,
			ko: 1000,
			kio: 1024,
			mo: 1000000,
			mio: 1048576,
			go: 1000000000,
			gio: 1073741824,
			to: 1000000000000,
			tio: 1099511627776,
			po: 1000000000000000,
			pio: 1125899906842624
		};
	} else {
		multipliers = {
			b:  1,
			bytes: 1,
			kb: 1000,
			kib: 1024,
			mb: 1000000,
			mib: 1048576,
			gb: 1000000000,
			gib: 1073741824,
			tb: 1000000000000,
			tib: 1099511627776,
			pb: 1000000000000000,
			pib: 1125899906842624
		};
	}
 
	if (matches) {
		var multiplier = multipliers[matches[2].toLowerCase()];
		return parseFloat( matches[1] ) * multiplier;
	} else {
		return -1;
	};
};

function datatableTrans() {
	
	$("#torrent_content").DataTable({
	aaSorting: [],
	responsive: true,

	columnDefs: [
	  {
		responsivePriority: 1,
		targets: 0
	  },
	  {
		responsivePriority: 2,
		targets: -1
	  },
	  { type: 'file-size', targets: 2 }
	],
    language: {
        processing: datatable_processing_text,
        search: datatable_search_text,
        lengthMenu: datatable_lengthMenu_text,
        info: datatable_info_text,
        infoEmpty: datatable_infoEmpty_text,
        infoFiltered: datatable_infoFiltered_text,
        infoPostFix: "",
        loadingRecords: datatable_loadingRecords_text,
        zeroRecords: datatable_zeroRecords_text,
        emptyTable: datatable_emptyTable_text,
        paginate: {
            first: datatable_first_text,
            previous: datatable_previous_text,
            next: datatable_next_text,
            last: datatable_last_text
        },
        aria: {
            sortAscending: datatable_sortAscending_text,
            sortDescending: datatable_sortDescending_text
        }
    }
	});

	$(".dataTables_filter input")
	.attr("placeholder", datatable_search_label_text)
	.css({
	  width: "300px",
	  display: "inline-block"
	});
	  
}
	
main();