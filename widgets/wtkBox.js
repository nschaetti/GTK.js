/*
 * wtkBox.js - WTK Box widget
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

/*
 * wtkWindow.js - WTK Window widget
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
 * WTK Box widget
 */
$.widget("custom.wtkBox", $.custom.wtkWidget, 
{
    // Options
	options :
	{
		elements: 3,
        orientation: 'vertical'
	},
    
    // Constructor
    _create: function()
    {
        // Call parent constructor
        $.custom.wtkWidget.prototype._create.call(this);
        
        // Get properties
        this.options.elements = ($(this.element).data('elements')) ? $(this.element).data('elements') : this.options.elements;
        
        // Init
        this._init();
    },
    
    /***********************************
     * PRIVATE
     ***********************************/
     
    _init: function()
    {
        var code = "";
        for(var i=0; i<this.options.elements; i++)
        {
            code += '<div class="wtkBoxInner" style="height:' + (100.0/this.options.elements) + '%;"></div>'
        }
        $(this.element).html(code);
    },
    
    /***********************************
     * EVENTS
     ***********************************/
    
    // Widget resized
    resize: function()
    {
    },
    
    /************************************
     * ACCESSORS
     ************************************/
    
});

// Create wtkWindow widgets
$(document).ready(function()
{
    $(".wtkWidget[data-widget='wtkBox']").wtkBox();
});
