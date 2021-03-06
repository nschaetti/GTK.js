/*
 * wtkButton.js - WTK Button widget
 * 
 * Copyright 2017 Nils Schaetti <n.schaetti@gmail.com>
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301, USA.
 * 
 * 
 */

/**
 * WTK Button widget
 */
$.widget("custom.wtkButton", $.custom.wtkWidget, 
{
    // Options
	options :
	{
        label: "Button"
	},
    
    // Constructor
    _create: function()
    {
        // Call parent constructor
        $.custom.wtkWidget.prototype._create.call(this);
        
        // Properties
        this.options.elements = ($(this.element).data('label')) ? $(this.element).data('label') : this.options.label;
        
        // Init
        this._init();
    },
    
    /***********************************
     * PRIVATE
     ***********************************/
     
    _init: function()
    {
        var code = '<div class="wtkButtonOutside"><div class="wtkButtonInside">' + this.options.label + '</div></div>';
        $(this.element).html(code);
    },
    
    /***********************************
     * EVENTS
     ***********************************/
    
    /************************************
     * ACCESSORS
     ************************************/
    
});

// Create wtkWindow widgets
$(document).ready(function()
{
    $(".wtkWidget[data-widget='wtkButton']").wtkButton();
});

