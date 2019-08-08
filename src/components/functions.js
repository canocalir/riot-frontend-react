import $ from 'jquery';
/* eslint-disable no-unused-expressions */

export const getGames = () => {

    $('.ajax-content').empty();
    $('.ajax-content2').empty();
    $('.sname').empty();
    $('.sname2').empty();
    $('.lname').empty();
    $('.lname2').empty();
    $('.isVictory').empty();
    $('.isDefeat').empty();

    $.ajax({
        url: 'https://riot-games-technical-exercise.herokuapp.com/game/1',
        dataType: 'json',
        success: (data) => {
            const teamcontent = data.teams.filter((team) => {
                return team;
            })

            const partivictor = teamcontent[0].participants;
            const partidefeat = teamcontent[1].participants;

            for (let i = 0; i < partivictor.length; i++) {
                $('.ajax-content').append(
                    $(".sname").text(teamcontent[0].shortName) +
                    $(".lname").text(teamcontent[0].name) +
                    $(".isVictory").text("VICTORY") +
                    '<tr>' +
                    '<td class="pname">' + partivictor[i].name + '</td>' +
                    '<td class="pstats">' + partivictor[i].stats + '</td>' +
                    '<td class="pstpoint">' + partivictor[i].pointsEarned + '</td>' +
                    '<td class="points">' + partivictor[i].totalScore + '</td>' +
                    '</tr>')
            }

            for (let i = 0; i < partidefeat.length; i++) {
                $('.ajax-content2').append(
                    $(".sname2").text(teamcontent[1].shortName) +
                    $(".lname2").text(teamcontent[1].name) +
                    $(".isDefeat").text("DEFEAT") +
                    '<tr>' +
                    '<td class="pname">' + partidefeat[i].name + '</td>' +
                    '<td class="pstats">' + partidefeat[i].stats + '</td>' +
                    '<td class="pstpoint">' + partidefeat[i].pointsEarned + '</td>' +
                    '<td class="points">' + partidefeat[i].totalScore + '</td>' +
                    '</tr>')
            }
        }
    });
}

export const getGames2 = () => {

    $('.ajax-content').empty();
    $('.ajax-content2').empty();
    $('.sname').empty();
    $('.sname2').empty();
    $('.lname').empty();
    $('.lname2').empty();
    $('.isVictory').empty();
    $('.isDefeat').empty();

    $.ajax({
        url: 'https://riot-games-technical-exercise.herokuapp.com/game/2',
        dataType: 'json',
        success: (data) => {
            const teamcontent = data.teams.filter((team) => {
                return team;
            })

            const partivictor = teamcontent[0].participants;
            const partidefeat = teamcontent[1].participants;

            for (let i = 0; i < partivictor.length; i++) {
                $(".sname").text(teamcontent[0].shortName) +
                    $(".lname").text(teamcontent[0].name) +
                    $(".isVictory").text("VICTORY") +
                    $('.ajax-content').append('<tr>' +
                        '<td class="pname">' + partivictor[i].name + '</td>' +
                        '<td class="pstats">' + partivictor[i].stats + '</td>' +
                        '<td class="pstpoint">' + partivictor[i].pointsEarned + '</td>' +
                        '<td class="points">' + partivictor[i].totalScore + '</td>' +
                        '</tr>')
            }

            for (let i = 0; i < partidefeat.length; i++) {
                $(".sname2").text(teamcontent[1].shortName) +
                    $(".lname2").text(teamcontent[1].name) +
                    $(".isDefeat").text("DEFEAT") +
                    $('.ajax-content2').append('<tr>' +
                        '<td class="pname">' + partidefeat[i].name + '</td>' +
                        '<td class="pstats">' + partidefeat[i].stats + '</td>' +
                        '<td class="pstpoint">' + partidefeat[i].pointsEarned + '</td>' +
                        '<td class="points">' + partidefeat[i].totalScore + '</td>' +
                        '</tr>')
            }
        }
    });
}