/*
 * wtkWidget.js - WTK widget
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
 * WTK Window widget
 */
$.widget("custom.wtkWidget", 
{
    // Constructor
    _create: function()
    {
        // Add the events
        this._add_actions();
    },
    
    /***********************************
     * PRIVATE
     ***********************************/
    
    // Window resized
    _add_actions: function()
    {
        // Resize
        if(this.resize)
        {
            this.parent().resize($.proxy(this.resize, this));
        }
    },
    
    /***********************************
     * EVENTS
     ***********************************/
    
    /************************************
     * ACCESSORS
     ************************************/
    
    // Get parent
    parent: function()
    {
        if($(this).parent().length == 0)
            return($(window));
        else
            return($(this).parent());
    }
    
});
